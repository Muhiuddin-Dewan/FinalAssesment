# Final Assesment

## Task-1: Local Development and Dockerization

### Step-1: Local Development

- Developed the application on a local machine (OS: Ubuntu).
- Installed necessary dependencies: Node.js, Express, PostgreSQL.
- Application files used: `node_modules`, `app.js`, `package-lock.json`, `package.json`, `privateApi.js`, `publicApi.js`.

### Step-2: Dockerization

- Wrote a Dockerfile and docker-compose file.
- Dockerized the application.
- Docker files used: `postgresdb_docker`, `.env`, `Dockerfile`, `docker-compose.yml`.

### Step-3: GitHub Integration

- Pushed the application code and docker files to GitHub.

## Task-2: Continuous Integration (CI)

- Implemented CI using GitHub Actions.
- Added `.github/workflows/ci.yml` for CI workflow.
- CI job builds the Docker image and pushes it to DockerHub.

## Task-3: Kubernetes Deployment

- Created a deployment manifest with 3 replicas.
- Created a single database manifest with a single replica.
- Implemented a network policy.
- Defined an ingress rule.

## Outputs

### Application Output

![Application Output](/output_images/public_api.PNG)

![Application Output](/output_images/private_api.PNG)

### Docker Output

![Docker Output](/output_images/docker.PNG)

### Docker Hub Output

![Docker Hub Output](/output_images/docker-hub.PNG)

### CI Job Output

![CI Job Output](/output_images/CI_Output.PNG)

### Kubernetes Output

![Kubernetes Output](/output_images/kubernetes.PNG)

