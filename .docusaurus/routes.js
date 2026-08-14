import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/devops-notes-site/',
    component: ComponentCreator('/devops-notes-site/', 'd86'),
    routes: [
      {
        path: '/devops-notes-site/',
        component: ComponentCreator('/devops-notes-site/', '7e1'),
        routes: [
          {
            path: '/devops-notes-site/',
            component: ComponentCreator('/devops-notes-site/', 'b16'),
            routes: [
              {
                path: '/devops-notes-site/category/ansible',
                component: ComponentCreator('/devops-notes-site/category/ansible', '66c'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/category/argo-cd',
                component: ComponentCreator('/devops-notes-site/category/argo-cd', 'e4d'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/category/aws',
                component: ComponentCreator('/devops-notes-site/category/aws', '186'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/category/cicd',
                component: ComponentCreator('/devops-notes-site/category/cicd', '0b4'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/category/cloud',
                component: ComponentCreator('/devops-notes-site/category/cloud', '657'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/category/docker',
                component: ComponentCreator('/devops-notes-site/category/docker', 'fe3'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/category/git',
                component: ComponentCreator('/devops-notes-site/category/git', '4f7'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/category/grafana',
                component: ComponentCreator('/devops-notes-site/category/grafana', 'e83'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/category/helm',
                component: ComponentCreator('/devops-notes-site/category/helm', '222'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/category/kubernetes',
                component: ComponentCreator('/devops-notes-site/category/kubernetes', '77b'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/category/linux',
                component: ComponentCreator('/devops-notes-site/category/linux', '2ba'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/category/misc',
                component: ComponentCreator('/devops-notes-site/category/misc', '6b6'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/category/monitoring--logging',
                component: ComponentCreator('/devops-notes-site/category/monitoring--logging', 'e13'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/category/openshift',
                component: ComponentCreator('/devops-notes-site/category/openshift', '290'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/category/prometheus',
                component: ComponentCreator('/devops-notes-site/category/prometheus', '7ff'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/category/scripting',
                component: ComponentCreator('/devops-notes-site/category/scripting', 'e3d'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/category/shell-scripting',
                component: ComponentCreator('/devops-notes-site/category/shell-scripting', 'e0d'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/category/terraform',
                component: ComponentCreator('/devops-notes-site/category/terraform', 'a1e'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/ci-cd/argocd/argo-cd-20-interview-questions-short-answers-2598',
                component: ComponentCreator('/devops-notes-site/ci-cd/argocd/argo-cd-20-interview-questions-short-answers-2598', 'a54'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/ci-cd/argocd/argocd-and-gitops-architecture-explained-4287',
                component: ComponentCreator('/devops-notes-site/ci-cd/argocd/argocd-and-gitops-architecture-explained-4287', 'c3c'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/ci-cd/argocd/argocd-vs-kubernetes-6432',
                component: ComponentCreator('/devops-notes-site/ci-cd/argocd/argocd-vs-kubernetes-6432', '997'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/ci-cd/argocd/difficult-rollbacks-in-argo-cd-3297',
                component: ComponentCreator('/devops-notes-site/ci-cd/argocd/difficult-rollbacks-in-argo-cd-3297', '493'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/ci-cd/argocd/github-vs-argo-cd-vs-kubernetes-9519',
                component: ComponentCreator('/devops-notes-site/ci-cd/argocd/github-vs-argo-cd-vs-kubernetes-9519', 'c41'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/ci-cd/argocd/gitops-with-argo-cd-3315',
                component: ComponentCreator('/devops-notes-site/ci-cd/argocd/gitops-with-argo-cd-3315', 'b24'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/ci-cd/argocd/inconsistent-kubernetes-deployment-in-argo-cd-6393',
                component: ComponentCreator('/devops-notes-site/ci-cd/argocd/inconsistent-kubernetes-deployment-in-argo-cd-6393', 'd40'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/ci-cd/argocd/troubleshooting-the-kubernetes-deployment-in-argo-cd-3076',
                component: ComponentCreator('/devops-notes-site/ci-cd/argocd/troubleshooting-the-kubernetes-deployment-in-argo-cd-3076', '005'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/ci-cd/argocd/what-problem-argo-cd-solves-5594',
                component: ComponentCreator('/devops-notes-site/ci-cd/argocd/what-problem-argo-cd-solves-5594', '496'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/ci-cd/argocd/why-argo-cd-is-used-in-devops-8406',
                component: ComponentCreator('/devops-notes-site/ci-cd/argocd/why-argo-cd-is-used-in-devops-8406', '325'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/ci-cd/cicd-line-by-line-explanation-2346',
                component: ComponentCreator('/devops-notes-site/ci-cd/cicd-line-by-line-explanation-2346', '0be'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/ci-cd/cicd-pipeline-github-actions-docker-kubernetes-2236',
                component: ComponentCreator('/devops-notes-site/ci-cd/cicd-pipeline-github-actions-docker-kubernetes-2236', 'daf'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/ci-cd/deployment-and-ci-cd-failures-in-devops-5930',
                component: ComponentCreator('/devops-notes-site/ci-cd/deployment-and-ci-cd-failures-in-devops-5930', '05b'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/ci-cd/devsecops-line-by-line-explanation-5772',
                component: ComponentCreator('/devops-notes-site/ci-cd/devsecops-line-by-line-explanation-5772', 'b69'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/ci-cd/secure-cicd-pipeline-stages-3063',
                component: ComponentCreator('/devops-notes-site/ci-cd/secure-cicd-pipeline-stages-3063', '369'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/cloud/ai-copilots-for-cloud-engineers-8679',
                component: ComponentCreator('/devops-notes-site/cloud/ai-copilots-for-cloud-engineers-8679', 'ed5'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/cloud/aws/aws-devops-explanation-9018',
                component: ComponentCreator('/devops-notes-site/cloud/aws/aws-devops-explanation-9018', 'bab'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/cloud/aws/aws-vs-azure-3419',
                component: ComponentCreator('/devops-notes-site/cloud/aws/aws-vs-azure-3419', 'a48'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/cloud/aws/aws-well-architected-framework-5-pillars-9427',
                component: ComponentCreator('/devops-notes-site/cloud/aws/aws-well-architected-framework-5-pillars-9427', 'efb'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/cloud/aws/secure-aws-architecture-3-tier-7035',
                component: ComponentCreator('/devops-notes-site/cloud/aws/secure-aws-architecture-3-tier-7035', 'c43'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/cloud/monolith-vs-microservices-vs-serverless-8411',
                component: ComponentCreator('/devops-notes-site/cloud/monolith-vs-microservices-vs-serverless-8411', '5fd'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/cloud/terraform/declarative-terraform-vs-imperative-ansible-0189',
                component: ComponentCreator('/devops-notes-site/cloud/terraform/declarative-terraform-vs-imperative-ansible-0189', 'fea'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/cloud/terraform/terraform-aws-ec2-instance-2337',
                component: ComponentCreator('/devops-notes-site/cloud/terraform/terraform-aws-ec2-instance-2337', 'f72'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/cloud/terraform/terraform-cheat-sheet-1167',
                component: ComponentCreator('/devops-notes-site/cloud/terraform/terraform-cheat-sheet-1167', '2ba'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/docker/docker-cheat-sheet-master-docker-deploy-anywhere-0608',
                component: ComponentCreator('/devops-notes-site/docker/docker-cheat-sheet-master-docker-deploy-anywhere-0608', 'efe'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/docker/docker-cheat-sheet-working-with-dockerfiles-1899',
                component: ComponentCreator('/devops-notes-site/docker/docker-cheat-sheet-working-with-dockerfiles-1899', '8ec'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/docker/docker-in-one-page',
                component: ComponentCreator('/devops-notes-site/docker/docker-in-one-page', '7b7'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/docker/docker-inspect-and-debug-like-a-pro-4842',
                component: ComponentCreator('/devops-notes-site/docker/docker-inspect-and-debug-like-a-pro-4842', '65f'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/docker/docker-layers-explained-2501',
                component: ComponentCreator('/devops-notes-site/docker/docker-layers-explained-2501', '212'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/docker/docker-persistence-networking-and-best-practices-1353',
                component: ComponentCreator('/devops-notes-site/docker/docker-persistence-networking-and-best-practices-1353', '153'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/docker/docker-vs-podman-5243',
                component: ComponentCreator('/devops-notes-site/docker/docker-vs-podman-5243', '235'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/docker/docker-vs-podman-vs-kubernetes-9684',
                component: ComponentCreator('/devops-notes-site/docker/docker-vs-podman-vs-kubernetes-9684', '885'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/docker/dockerfile-line-by-line-explanation-6501',
                component: ComponentCreator('/devops-notes-site/docker/dockerfile-line-by-line-explanation-6501', '9c9'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/docker/why-does-my-docker-container-keep-restarting-1783',
                component: ComponentCreator('/devops-notes-site/docker/why-does-my-docker-container-keep-restarting-1783', 'd7c'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/git/cherry-pick-vs-revert-in-git-4843',
                component: ComponentCreator('/devops-notes-site/git/cherry-pick-vs-revert-in-git-4843', '809'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/git/git-and-github-3552',
                component: ComponentCreator('/devops-notes-site/git/git-and-github-3552', 'fd4'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/git/git-architecture-1937',
                component: ComponentCreator('/devops-notes-site/git/git-architecture-1937', '73d'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/git/git-cherry-pick-3847',
                component: ComponentCreator('/devops-notes-site/git/git-cherry-pick-3847', '41b'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/git/git-clone-vs-git-fork-1382',
                component: ComponentCreator('/devops-notes-site/git/git-clone-vs-git-fork-1382', '281'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/git/git-fetch-vs-git-pull-3605',
                component: ComponentCreator('/devops-notes-site/git/git-fetch-vs-git-pull-3605', '24e'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/git/git-github-branching-strategies-0874',
                component: ComponentCreator('/devops-notes-site/git/git-github-branching-strategies-0874', 'e17'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/git/git-reset-vs-git-revert-6049',
                component: ComponentCreator('/devops-notes-site/git/git-reset-vs-git-revert-6049', '202'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/git/git-stash-vs-git-reset-1499',
                component: ComponentCreator('/devops-notes-site/git/git-stash-vs-git-reset-1499', 'f95'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/git/merge-vs-rebase-of-git-4274',
                component: ComponentCreator('/devops-notes-site/git/merge-vs-rebase-of-git-4274', '4f5'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/configmaps-vs-secrets-3462',
                component: ComponentCreator('/devops-notes-site/kubernetes/configmaps-vs-secrets-3462', '381'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/docker-compose-to-kubernetes-8222',
                component: ComponentCreator('/devops-notes-site/kubernetes/docker-compose-to-kubernetes-8222', 'ff8'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/docker-container-vs-kubernetes-pod-4772',
                component: ComponentCreator('/devops-notes-site/kubernetes/docker-container-vs-kubernetes-pod-4772', 'f56'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/helm',
                component: ComponentCreator('/devops-notes-site/kubernetes/helm', '906'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/kubernetes-architecture-explained-for-beginners-5098',
                component: ComponentCreator('/devops-notes-site/kubernetes/kubernetes-architecture-explained-for-beginners-5098', '0f7'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/kubernetes-cheat-sheet',
                component: ComponentCreator('/devops-notes-site/kubernetes/kubernetes-cheat-sheet', '548'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/kubernetes-kubectl-cheat-sheet-9640',
                component: ComponentCreator('/devops-notes-site/kubernetes/kubernetes-kubectl-cheat-sheet-9640', '764'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/kubernetes-line-by-line-explanation-7239',
                component: ComponentCreator('/devops-notes-site/kubernetes/kubernetes-line-by-line-explanation-7239', '9cb'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/kubernetes-rbac-explained-0466',
                component: ComponentCreator('/devops-notes-site/kubernetes/kubernetes-rbac-explained-0466', '51f'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/kubernetes-services-0346',
                component: ComponentCreator('/devops-notes-site/kubernetes/kubernetes-services-0346', 'd94'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/kubernetes-yaml-review-3721',
                component: ComponentCreator('/devops-notes-site/kubernetes/kubernetes-yaml-review-3721', '98f'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/multi-cluster-gitops',
                component: ComponentCreator('/devops-notes-site/kubernetes/multi-cluster-gitops', 'cab'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/openshift/application-deployment-on-openshift-6708',
                component: ComponentCreator('/devops-notes-site/kubernetes/openshift/application-deployment-on-openshift-6708', '27f'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/openshift/builds-and-image-management-6748',
                component: ComponentCreator('/devops-notes-site/kubernetes/openshift/builds-and-image-management-6748', '94f'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/openshift/openshift-cli-and-web-console-3856',
                component: ComponentCreator('/devops-notes-site/kubernetes/openshift/openshift-cli-and-web-console-3856', 'ae6'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/openshift/openshift-installation-7654',
                component: ComponentCreator('/devops-notes-site/kubernetes/openshift/openshift-installation-7654', '9de'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/openshift/openshift-networking-9770',
                component: ComponentCreator('/devops-notes-site/kubernetes/openshift/openshift-networking-9770', '959'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/openshift/openshift-storage-2330',
                component: ComponentCreator('/devops-notes-site/kubernetes/openshift/openshift-storage-2330', 'ee9'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/openshift/red-hat-openshift-line-by-line-explanation-6588',
                component: ComponentCreator('/devops-notes-site/kubernetes/openshift/red-hat-openshift-line-by-line-explanation-6588', 'd43'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/secure-kubernetes-cluster-8814',
                component: ComponentCreator('/devops-notes-site/kubernetes/secure-kubernetes-cluster-8814', 'bf3'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/troubleshooting-kubernetes-pod-stuck-in-pending-state-1171',
                component: ComponentCreator('/devops-notes-site/kubernetes/troubleshooting-kubernetes-pod-stuck-in-pending-state-1171', 'c9e'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/kubernetes/troubleshooting-pod-stuck-pending-3833',
                component: ComponentCreator('/devops-notes-site/kubernetes/troubleshooting-pod-stuck-pending-3833', '6ef'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/linux/linux-architecture-6459',
                component: ComponentCreator('/devops-notes-site/linux/linux-architecture-6459', 'a6f'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/linux/linux-architecture-8943',
                component: ComponentCreator('/devops-notes-site/linux/linux-architecture-8943', '8ab'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/linux/linux-distributions-8667',
                component: ComponentCreator('/devops-notes-site/linux/linux-distributions-8667', '862'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/linux/linux-file-permissions-explained-9556',
                component: ComponentCreator('/devops-notes-site/linux/linux-file-permissions-explained-9556', '895'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/linux/linux-processes-and-jobs-0085',
                component: ComponentCreator('/devops-notes-site/linux/linux-processes-and-jobs-0085', '41d'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/linux/linux-troubleshooting-quick-guide-5540',
                component: ComponentCreator('/devops-notes-site/linux/linux-troubleshooting-quick-guide-5540', '6cf'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/misc/ai-tools-every-devops-engineer-should-know-3552',
                component: ComponentCreator('/devops-notes-site/misc/ai-tools-every-devops-engineer-should-know-3552', '566'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/misc/devops-resources-cheat-sheet-8609',
                component: ComponentCreator('/devops-notes-site/misc/devops-resources-cheat-sheet-8609', '61f'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/misc/devops-vs-platform-engineering-6288',
                component: ComponentCreator('/devops-notes-site/misc/devops-vs-platform-engineering-6288', '7ab'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/monitoring-logging/grafana/grafana-cheat-sheet-1956',
                component: ComponentCreator('/devops-notes-site/monitoring-logging/grafana/grafana-cheat-sheet-1956', '5a0'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/monitoring-logging/production-incident-response-in-devops-6225',
                component: ComponentCreator('/devops-notes-site/monitoring-logging/production-incident-response-in-devops-6225', '50c'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/monitoring-logging/prometheus/prometheus-cheat-sheet-explanation-7414',
                component: ComponentCreator('/devops-notes-site/monitoring-logging/prometheus/prometheus-cheat-sheet-explanation-7414', 'e37'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/scripting/ansible/ansible-line-by-line-explanation-8498',
                component: ComponentCreator('/devops-notes-site/scripting/ansible/ansible-line-by-line-explanation-8498', '63d'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/scripting/shell/linux-shell-script-line-by-line-explanation-7815',
                component: ComponentCreator('/devops-notes-site/scripting/shell/linux-shell-script-line-by-line-explanation-7815', '049'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/devops-notes-site/',
                component: ComponentCreator('/devops-notes-site/', '1d6'),
                exact: true,
                sidebar: "notesSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
