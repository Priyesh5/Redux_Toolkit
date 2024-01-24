Redux -> 
    Redux is an independent JS library
    It is a predictable state container
    predictable because it follows a process to update/maintain a state
    state container as it stores the state of the complete project and maintain it across all the shared UI components
    Redux is not tightly coupled with react, to use it with react we have to use library 'react-redux'
    Redux can be used with angular, vue and other JS UI libraries

Redux-toolkit ->
    A toolkit made on top of redux to perform redux functionality in more efficient way
    Redux have some limitation like, too much configuration, boiler plate code etc. redux toolkit wins over on those limitation to some extent.
    From now on it is pushed to be standard way to use redux.

======================================================================================================================
*REDUX*
Three Core Concepts ->
    Store (Shop) -> holds the state of the application.
    Action (Cake oredered) ->  describes what happened in the application.
    Reducer (Shopkeeper) ->  ties action and store together -> handles the action and decides how to update the state in store.

Three Principles -> 
    The global state of the application is stored as a single object inside a single store.
    The only way to update the state of the application is by dispatching an action i.e. an object telling what happened. The application will never update the store directly.
    To specify how the state tree will update by actions, you write pure reducers. A reducer is a pure function that will take previous state and action as parameters and return the updated state.

Flow ->
    application ---(dispatches action)----> Action ---(handles action)---> Reducer -----(update)------> Store ------(subscribed by)--------> Application ...........

