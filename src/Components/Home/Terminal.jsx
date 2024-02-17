import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';

export default function Terminal() {

    const el1 = useRef(null);

    const code_elements = [
        ` <span class="text-danger fw-bold " ><br>import </span><span class="text-primary">java</span >.<span class="text-primary-emphasis">util</span>.<span class="text-dark">Scanner</span>;<br>
        <br>
               <span class="fw-bold text-primary" >public</span><span class="text-danger"> class </span><span>HelloWorld</span><span class="text-warning fw-semibold"> {</span><br>
               &nbsp;&nbsp;<span class="fw-bold text-primary" >public</;span><span class="text-danger"> static</span><span class="fw-semibold"> void</span><span class="text-primary "> main </span> <span class="fw-bold">(</span><span class="text-danger">String </span><span class="text-dark">[ ]</span><span class="fw-lighter"> args</span><span class="fw-bold">)</span><span class="text-danger"> {</span><br>
               &nbsp;&nbsp;&nbsp;&nbsp;<span class="fw-semibold text-dark"> Scanner</span><span class="fst-italic text-warning"> reader</span> = <span class="text-primary">new </span>Scanner(System.in);<br>
               <span class="" > System.out.print("Enter a number: ");<br>
               <span class="" > int number = reader.nextInt();<br>
               <span class="" > System.out.println("You entered: " + number);<br> 
               <span class="text-danger" > }
               <span class="text-warning" > }</span>
     `,

        `<span className=""  ><br>#include < iostream > <br>
            <span className=""  >using namespace std;<br>
                <span className="" >int main() {<br>
                    <span className=""  >cout << "Hello World!";<br>
               <span className="" >return 0;
    } </span>`, `
   
   <span className=""  > using System;<br>
    <span className=""  >namespace HelloWorld<br>
      {<br>
        <span className="" >class Program<br>
    {<br>
        <span className="" > static void Main(string[] args)<br>
   {<br>
    <span className="" > Console.WriteLine("Hello World!"); <br>   
        <span className=""  >}<br>
 }
 <span className="" >}</span>`
    ];

    useEffect(() => {
        const terminal_typed = new Typed(el1.current, {
            strings: code_elements,
            typeSpeed: 20,
            backSpeed: 0,
            loop: true,
            cursorChar: "<span class='cursor h5 '>|</span>"
        })

        return () => {
            terminal_typed.destroy();
        }
    })

    return (
        <>

            {/* terminal code  */}

            <div className="terminal-container w-25 m-5">
                <div className="terminal">
                    <div className="header">
                        <div className="circle circle-red"></div>
                        <div className="circle circle-yellow"></div>
                        <div className="circle circle-green"></div>
                        <div className="header-text text-light">booker--xsh-80x24</div>
                    </div>
                    <div className="terminal-body bg-secondary-subtle rounded-bottom-3" style={{ height: "250px" }}>
                        <span className='h5' ref={el1}></span>
                    </div>
                </div>
            </div>
            {/* terminal code ended  */}
        </>
    )
}
