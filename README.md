Health Tracker
===========

#### **Purpose**: Provide an application for users to track their chronic health conditions over time by logging information and rating how they feel each day.

Development:
---
This application is currently in development.

Structure:
---
```
 package.json                   # Project level scripts/config
    +- api                      # NestJS API
        +- Migration            # Typeorm Migrations                  
        +- src
            +- Entity           # TypeOrm Entities
            +- main.ts          # API Bootstrapping entrypoint
            +- modules          # Modules with service, controller, interfaces
    +- client                   # Angular Frontend Application
        +- src
            +- app
                +- components   # Individual Components
                +- global       # Application-wide interfaces, services,

```

Instructions:
---
1. This application runs inside of a VM using Vagrant. Run `vagrant up` to get started (assuming you have vagrant installed)
2. Run `vagrant ssh` to connect to the VM instance, admin privilages will be required
3. Run `npm run start:dev` from /var/www in VM to start the Angular and API applications in parallel for local development.
4. Angular available on `localhost:4200` and API on `localhost:3000`

Optional: If you run both applications in parallel, you may run into file watcher limits. In order to increase your file watchers, run this command inside of the VM:
`echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl  -p`

Pull Requests:
--- 
1. Each commit is linted, fix any lint errors before pushing and avoid overriding the linter.
2. Submit a pull request for what functionality or bug fix you are adding and then assign the Pull Request to Michael Fearnley.
3. Pay attention to any requested changes on your Pull Request and make the necessary adjustments on that branch and then push the changes in order to update the PR.
4. If all is good your PR is merge, now do a fresh pull and a little dance to celebrate!

Api Documentation:
---
API documentation is self-documenting based on swagger tags added to controllers and entities.
Documentation is available at: `localhost:3000/docs`