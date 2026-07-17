# TaskDashboard

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.6.

## 📚 Angular Learning Journey

| Stage | Implementation | Angular Concepts Learned |
| :--- | :--- | :--- |
| **Stage 1 – Components** | Dashboard Component, Task Details Component | Standalone Components, Component Architecture, `@Component`, Parent & Child Components |
| **Stage 2 – HTTP & Services** | Fetch tasks from DummyJSON API | Services, Dependency Injection (DI), `HttpClient`, Observables, `subscribe()` |
| **Stage 3 – Data Binding** | Display task data, Search input | Interpolation (`{{ }}`), Property Binding (`[]`), Event Binding (`()`), Two-way Binding (`[(ngModel)]`) |
| **Stage 4 – Structural Directives** | Render task list, Loading state | `*ngIf` / `@if`, `*ngFor` / `@for`, Structural Directives |
| **Stage 5 – Parent → Child Communication** | Pass task data, Delete task, View task | `@Input()`, `@Output()`, `EventEmitter` |
| **Stage 6 – Smart vs Dumb Components** | Dashboard manages data, TaskDetails handles UI | Smart Components, Dumb Components, Separation of Concerns |
| **Stage 7 – Search & Filtering** | Search tasks dynamically | Two-way Binding, JavaScript `filter()`, Real-time UI Updates |
| **Stage 8 – ViewChild** | Auto-focus search box, Clear Search | Template Reference Variables (`#searchBox`), `@ViewChild`, `ElementRef`, `nativeElement`, DOM Manipulation |
| **Stage 9 – Routing** | Dashboard → Task Details navigation | Routing, `RouterOutlet`, `RouterLink`, Route Parameters, `ActivatedRoute`, Navigation |
| **Stage 10 – Route Parameters & API** | Fetch single task using route ID | Dynamic Routing, Route Parameters, API Calls, Service Reusability |
| **Stage 11 – Pipes** | Built-in `titlecase`, Custom Completed/Pending Pipe | Built-in Pipes, Custom Pipes, `PipeTransform`, Pipe Operator (`\|`) |
| **Stage 12 – Attribute Directives** | Highlight completed tasks, Hover effect | Attribute Directives, `@HostBinding`, `@HostListener`, Reusable UI Behavior |
| **Stage 13 – Lifecycle Hooks** | Log component creation | `ngOnInit()`, Component Lifecycle, Constructor vs `ngOnInit()` |

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

tructor vs `ngOnInit()` |
