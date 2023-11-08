import React, {useState} from 'react';

const Calculator = () => {
    //Tailwind classes for styling below - you can ignore
    const containerClass = " flex-wrap border-black mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-purple-900 shadow-lg border-4 rounded-lg  w-96 ";
    const titleClass = "p-5 text-white text-center text-3xl bg-purple-900";
    const titleSpanClass = "text-orange-500";
    const expressionClass = "pt-16 p-5 pb-0 text-white text-right text-3xl bg-purple-800";
    const resultClass = "p-5 text-white text-right text-3xl bg-purple-800";
    const operatorRowClass = "justify-center flex items-stretch bg-purple-900 h-24";
    const operatorTopButtonClass = " rounded-full h-15 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none";
    const numberRowClass = "justify-center flex items-stretch bg-purple-900 h-24";
    const numberButtonClass = " justify-center rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none py-1";
    const equalButtonClass = "rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none";
    const divButtonClass = " px-1 py-2 justify-center flex items-center text-white text-2xl font-semibold";
    //Tailwind classes for styling above - you can ignore

    //State variables below
    const [value, writeValue] = useState("0");

    function inputClicked(event) {
        if (value === "0") {
            writeValue(event.target.textContent);
        } else {
            writeValue(value + event.target.textContent);
        }
    }

    function cleanBar() {
        writeValue("0");
    }

    function makeOperation() {
        let result = eval(value.replace("÷", "/").replace("×", "*").replace("%", "/100*"));
        writeValue(result);
    }

    return (
        <div className={containerClass}>
            <div className="">
                <div className={titleClass}><span className={titleSpanClass}>Calcu</span>lator</div>
                <div className={expressionClass}>2000 + 100</div>
                <div className={resultClass}><span className={titleSpanClass}>{value}</span></div>

                <div className={operatorRowClass}>
                    <div className={divButtonClass}>
                        <div  onClick={inputClicked} className={operatorTopButtonClass}>(</div>
                    </div>

                    <div className={divButtonClass}>
                        <div onClick={inputClicked} className={operatorTopButtonClass}>)</div>
                    </div>

                    <div className={divButtonClass}>
                        <div onClick={inputClicked} className={operatorTopButtonClass}>%</div>
                    </div>

                    <div className={divButtonClass}>
                        <div onClick={cleanBar} className={operatorTopButtonClass}>AC</div>
                    </div>
                </div>

                <div className={numberRowClass}>
                    <div className={divButtonClass}>
                        <div onClick={inputClicked} className={numberButtonClass}>7</div>
                    </div>

                    <div className={divButtonClass}>
                        <div onClick={inputClicked} className={numberButtonClass}>8</div>
                    </div>

                    <div className={divButtonClass}>
                        <div onClick={inputClicked} className={numberButtonClass}>9</div>
                    </div>

                    <div className={divButtonClass}>
                        <div onClick={inputClicked} className={numberButtonClass}>÷</div>
                    </div>
                </div>

                <div className={numberRowClass}>
                    <div className={divButtonClass}>
                        <div onClick={inputClicked} className={numberButtonClass}>4</div>
                    </div>

                    <div className={divButtonClass}>
                        <div onClick={inputClicked} className={numberButtonClass}>5</div>
                    </div>

                    <div className={divButtonClass}>
                        <div onClick={inputClicked} className={numberButtonClass}>6</div>
                    </div>

                    <div className={divButtonClass}>
                        <div onClick={inputClicked} className={numberButtonClass}>×</div>
                    </div>
                </div>

                <div className={numberRowClass}>
                    <div className={divButtonClass}>
                        <div onClick={inputClicked} className={numberButtonClass}>1</div>
                    </div>

                    <div className={divButtonClass}>
                        <div onClick={inputClicked} className={numberButtonClass}>2</div>
                    </div>

                    <div className={divButtonClass}>
                        <div onClick={inputClicked} className={numberButtonClass}>3</div>
                    </div>

                    <div className={divButtonClass}>
                        <div onClick={inputClicked} className={numberButtonClass}>-</div>
                    </div>
                </div>

                <div className={numberRowClass}>
                    <div className={divButtonClass}>
                        <div onClick={inputClicked} className={numberButtonClass}>0</div>
                    </div>

                    <div className={divButtonClass}>
                        <div onClick={inputClicked} className={numberButtonClass}>.</div>
                    </div>

                    <div className={divButtonClass}>
                        <div onClick={makeOperation} className={equalButtonClass}>=</div>
                    </div>

                    <div className={divButtonClass}>
                        <div onClick={inputClicked} className={numberButtonClass}>+</div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default Calculator;
