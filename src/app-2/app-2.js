import App1, {app1Value} from "app-1"

console.log(App1, "app1 default export even though there isn't a default export")
console.log(app1Value, "app1Value is undefined even though it's a named export")