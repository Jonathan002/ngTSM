# ngTSM (Angular Typescript State Management)

The Goal of ngTSM is to follow a paradim of protecting state for an application while only relying on Typescript to Type protect it.

- It is light weight and doesn't require an extra library to be installed.
- It does not use **javascript runtime** to protect state such as ngrx selectors.
- The methods are traceable as typings are retained vs having to retype actions if you are using ngrx.
- The paradim is less powerful than intercepting actions, although it should have state mutation be tracable in a linear way. Too much interceptions of an action may be hard to read and cause bugs.

The concept can be learned quickely as you only need to know Typescript and Angular.

## One Barrel Per Module

- A ngrx store can be represented as a ServiceBarrel.
- Each Barrel Collects Services that Type protect `readonly` state and mutate state with methods (which acts as reducers and actions).
- Components can DI the service Barrel and read state or mutate state. (See Project for example)

### Can It Scale?
- Ideally it should scale as much as angular scales since it is module based.

## Advance User Guide

### Share State with Hiearchy DI

- To prevent Circular Dependency a DI naming guide has been created.
  - High
  - Medium (no prefix - starting point)
  - Low

Lower Prefix names can be DI into services that are prefixed higher.

For extreme cases the hiearchy names can continue with increments or decrements.
- Highest{incrementNumber}
- Highest
- Higher
- ...
- Lower
- Lowest
- Lowest{decrementNumber}

### Share State with SharedService

- A private shared store service (hiearchy of *lowest*) can be attached to each feature barrel and be used privately between all the service of the feature barrel. It can be used to hold utilities such as shared state properties or contain observables to emit state changes. This should be used as a last resort if Hiearchy DI cannot do the job. The goal is to isolate state and mutation logic together as much as possible.


