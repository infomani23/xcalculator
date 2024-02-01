import React from "react";
import "./App.css";
import { useState } from "react";
import Button from "./Button";
const App = () => {
	const [result, setResult] = useState("");
	const [exp, setExp] = useState("");
	const handleClick = (data) => {
		if (data == "C") {
			setExp("");
			setResult("");
		} else {
			setExp(exp + data);
		}
	};
	const handleResult = (res) => {
		setResult(res);
	};

	return (
		<div className="calc">
			<h1>React Calculator</h1>
			<input type="text" name="" id="" value={exp} />
			{result && <div className="result">{result}</div>}
			<div className="calcBtnGrp">
				<Button handleClickFun={handleClick}>7</Button>
				<Button handleClickFun={handleClick}>8</Button>
				<Button handleClickFun={handleClick}>9</Button>
				<Button handleClickFun={handleClick}>+</Button>
			</div>
			<div className="calcBtnGrp">
				<Button handleClickFun={handleClick}>4</Button>
				<Button handleClickFun={handleClick}>5</Button>
				<Button handleClickFun={handleClick}>6</Button>
				<Button handleClickFun={handleClick}>-</Button>
			</div>
			<div className="calcBtnGrp">
				<Button handleClickFun={handleClick}>1</Button>
				<Button handleClickFun={handleClick}>2</Button>
				<Button handleClickFun={handleClick}>3</Button>
				<Button handleClickFun={handleClick}>*</Button>
			</div>
			<div className="calcBtnGrp">
				<Button handleClickFun={handleClick}>C</Button>
				<Button handleClickFun={handleClick}>0</Button>
				<Button curExp={exp} setRes={handleResult}>
					=
				</Button>
				<Button handleClickFun={handleClick}>/</Button>
			</div>
		</div>
	);
};

export default App;