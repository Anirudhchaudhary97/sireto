import {render,screen} from "@testing-library/react"


import App from "../../App"

test("test first react app",()=>{
    render(<App/>)
    const text=screen.getByText("First React Test Case");
    expect(text).toBeInTheDocument()
})