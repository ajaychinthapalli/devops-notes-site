---
title: "OpenShift CLI & Web Console"
---

# OpenShift CLI & Web Console

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785657623856.jpeg)

</details>


Manage Projects — Inspect Resources — Deploy Faster

## 1. CLI Login & Identity

```bash
oc login
oc whoami
```

Login to the cluster and verify the current user.

## 2. Projects

```bash
oc new-project
oc project
```

Create a new project or switch to an existing one.

## 3. View Resources

```bash
oc get pods
oc get nodes
oc get events
```

Quickly list workloads, nodes and recent cluster events.

## 4. Inspect & Troubleshoot

```bash
oc describe pod
oc logs
oc exec
```

Describe objects, inspect logs, and open a shell inside a container.

## 5. Create & Update Resources

```bash
oc apply
oc create
oc edit
oc delete
```

Apply YAML, create resources, edit live objects, or delete them.

## 6. Expose, Scale & Rollout

```bash
oc expose
oc scale
oc rollout
```

Expose services/routes, scale workloads, and manage rollouts.

## 7. Admin & Debug

```bash
oc adm
oc debug
```

Use admin commands and launch debug sessions when deeper troubleshooting is needed.

## 8. Web Console Perspectives

- Administrator perspective
- Developer perspective

Admins manage cluster resources; developers build and deploy applications.

## 9. Working with YAML

- Define resources as code
- Reuse templates and manifests
- Track changes easily

```bash
oc explain
```

Use `oc explain` to understand resource fields from the CLI.

## 10. Logs, Events & Monitoring

- View logs from the console
- Review events for failures
- Inspect pods and deployments visually

The web console helps with fast troubleshooting and visibility.

## 11. Managing Projects in the Console

- Create projects
- Switch projects
- View workloads and resources
- Manage deployments

The console makes project management easier for day-to-day work.

## 12. Authentication with Tokens

- Token-based authentication
- Secure access for automation
- Useful for scripts and CI/CD

Tokens help automate OpenShift CLI access securely.

## Golden Rule

Understand the project, inspect the resources, and use CLI + Web Console together for faster OpenShift administration and development.

Login -> Inspect -> Apply -> Expose -> Scale -> Troubleshoot
