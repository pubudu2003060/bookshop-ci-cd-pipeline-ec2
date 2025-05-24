# CI/CD Workflows

This directory contains the GitHub Actions workflows for the CI/CD pipeline. The pipeline is broken down into several files, each responsible for a specific stage.

## Workflow Overview

1.  **`build.yml`**:
    *   **Trigger**: Pushes to the `develop` branch (or other feature branches).
    *   **Purpose**: Builds the Docker image for the application and pushes it to Amazon ECR.
    *   **Key Steps**:
        *   Checks out the source code.
        *   Configures AWS credentials.
        *   Logs into Amazon ECR.
        *   Builds the Docker image using the `Dockerfile` in the root directory.
        *   Tags the image (e.g., `latest` or with a commit SHA).
        *   Pushes the tagged image to the specified ECR repository.
    *   **Secrets Required**:
        *   `AWS_ACCESS_KEY_ID`
        *   `AWS_SECRET_ACCESS_KEY`
        *   `AWS_REGION`
        *   `ECR_REPOSITORY`

2.  **`deploy_staging.yml`**:
    *   **Trigger**: Pushes to the `staging` branch.
    *   **Purpose**: Deploys the Docker image from ECR to the staging environment (EC2 instance).
    *   **Key Steps**:
        *   Checks out the source code from the `staging` branch.
        *   Configures AWS credentials.
        *   Logs into Amazon ECR.
        *   Connects to the staging EC2 instance via SSH.
        *   Pulls the latest Docker image from ECR.
        *   Stops and removes any existing staging container.
        *   Runs the new Docker image as a container (e.g., `react-app-staging` on port 8080).
    *   **Secrets Required**:
        *   `AWS_ACCESS_KEY_ID`
        *   `AWS_SECRET_ACCESS_KEY`
        *   `AWS_REGION`
        *   `ECR_REPOSITORY`
        *   `STAGING_EC2_HOST`
        *   `STAGING_EC2_USER`
        *   `STAGING_EC2_SSH_KEY`

3.  **`deploy_production.yml`**:
    *   **Trigger**: Pushes to the `main` branch.
    *   **Purpose**: Deploys the Docker image from ECR to the production environment (EC2 instance).
    *   **Key Steps**:
        *   Checks out the source code from the `main` branch.
        *   Configures AWS credentials.
        *   Logs into Amazon ECR.
        *   Connects to the production EC2 instance via SSH.
        *   Pulls the latest Docker image from ECR.
        *   Stops and removes any existing production container.
        *   Runs the new Docker image as a container (e.g., `react-app` on port 80).
    *   **Secrets Required**:
        *   `AWS_ACCESS_KEY_ID`
        *   `AWS_SECRET_ACCESS_KEY`
        *   `AWS_REGION`
        *   `ECR_REPOSITORY`
        *   `EC2_HOST`
        *   `EC2_USER`
        *   `EC2_SSH_KEY`

## Workflow Triggers and Branching Strategy (Example)

*   Development happens on feature branches, which are then merged into `develop`.
*   A push to `develop` triggers `build.yml` to build and push the Docker image.
*   When ready for staging, `develop` is merged into `staging`.
*   A push to `staging` triggers `deploy_staging.yml` to deploy to the staging environment.
*   After successful staging tests, `staging` is merged into `main`.
*   A push to `main` triggers `deploy_production.yml` to deploy to the production environment.

This strategy ensures that code is built and tested before being deployed to production. Manual triggers or triggers based on release tags can also be implemented as needed.

## Important Notes

*   Ensure all required secrets are configured in the GitHub repository settings (`Settings > Secrets and variables > Actions`).
*   The `runs-on: self-hosted` directive indicates these workflows are intended for self-hosted runners. Adjust if using GitHub-hosted runners.
*   The `ECR_REPOSITORY` secret should contain the name of your ECR repository.
*   The `IMAGE_TAG` environment variable can be customized (e.g., using `${{ github.sha }}` for unique tags per commit).
