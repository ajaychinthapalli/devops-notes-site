---
title: "Difficult Rollbacks in Argo CD"
---

# Difficult Rollbacks in Argo CD

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785988013297.jpeg)

</details>


**GitOps Continuous Delivery**

## 1. Why Rollbacks Become Difficult

- Git can reapply the broken version: manual rollback may restore an older version, but Git still holds the new config, so Argo CD may sync it back.
- Automated sync blocks native rollback: disable auto-sync first or revert in Git.
- Application state is not always reversible: DB schema changes, PV data, external APIs, deleted resources, secrets, CRDs.
- Selective sync may not provide rollback history.
- Resource dependencies can fail if restored in the wrong order.

**Not easily reversible:** DB schema changes, PV data, External APIs, Deleted resources, Secrets, CRDs.

### Flow: Why It Fails

1. New (bad) commit pushed to git
2. Auto-sync keeps bringing it back to the cluster (even after a manual rollback)

## 2. Safer Rollback Approach

- Best practice: revert the bad Git commit and push the fix.
- Argo CD then syncs the cluster to the corrected desired state.

### Recommended Flow

1. `git revert` the bad commit
2. Push the fix commit
3. Argo CD syncs
4. Cluster converges to corrected desired state

### Emergency Steps

1. Disable automated sync
2. Check app history
3. Roll back using a history ID

### Emergency Path

1. Pause auto-sync
2. Check history
3. Rollback (History ID)
4. Monitor & validate

## 3. Best Practices

- Prefer `git revert` over cluster-only rollback
- Use immutable image tags
- Make DB migrations backward-compatible
- Add validation hooks
- Use canary or blue-green deployments
- Test rollback procedures regularly
- Re-enable auto-sync only after Git and cluster match

> Rollback is not just about going back — it's about going back the **RIGHT** way!

> **CAUTION:** Database changes may not be reversible!

## Key Takeaway

In GitOps, a successful rollback must restore **both** the application and Git as the source of truth.
