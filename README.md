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
2. Run `npm start` from /var/www in VM to start the Angular and API applications in parallel.
3. Angular available on `localhost:4200` and API on `localhost:3000`