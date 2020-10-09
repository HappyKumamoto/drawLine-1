"use strict";
	let canvas, context, ball;
	ball = {x : 10, y : 10, dx : 5, dy : 2}; // 位置の初期値と，インターバルごとの移動距離
	function drawBall() {
		
		// ボールの移動
		if (ball.x < 10 || ball.x > 490) {
			ball.dx *= -1;
		}
		if (ball.y < 10 || ball.y > 490) {
			ball.dy *= -1;
		}
		ball.x += ball.dx;
		ball.y += ball.dy;
		// ボールを描画
		context.fillStyle = "#1E90FF";
		context.beginPath();
		context.arc(ball.x, ball.y, 10, 0, Math.PI * 2, false);
		context.fill();
	}

	window.onload = function () {
		// Canvasを取得
		canvas = document.getElementById("canvas1");
		// コンテキストを取得
		context = canvas.getContext("2d");


		// アニメーション
		setInterval(drawBall, 50);
	};
