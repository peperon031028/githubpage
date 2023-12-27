// game.js
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
    x: canvas.width / 2,
    y: canvas.height - 30,
    width: 50,
    height: 50,
    speed: 5
};

const bullets = [];
const enemies = [];
let score = 0;

function drawPlayer() {
    ctx.fillStyle = "#00F";
    ctx.fillRect(player.x - player.width / 2, player.y - player.height / 2, player.width, player.height);
}

function drawBullets() {
    ctx.fillStyle = "#F00";
    bullets.forEach((bullet) => {
        ctx.fillRect(bullet.x - 2, bullet.y - 10, 4, 10);
    });
}

function drawEnemies() {
    ctx.fillStyle = "#0F0";
    enemies.forEach((enemy) => {
        ctx.fillRect(enemy.x - enemy.width / 2, enemy.y - enemy.height / 2, enemy.width, enemy.height);
    });
}

function update() {
    // プレイヤーの移動
    if (player.x > player.width / 2 && keys.left) {
        player.x -= player.speed;
    }
    if (player.x < canvas.width - player.width / 2 && keys.right) {
        player.x += player.speed;
    }

    // 弾の移動と当たり判定
    bullets.forEach((bullet, index) => {
        bullet.y -= 5;

        // 敵との当たり判定
        enemies.forEach((enemy, enemyIndex) => {
            if (
                bullet.x > enemy.x - enemy.width / 2 &&
                bullet.x < enemy.x + enemy.width / 2 &&
                bullet.y > enemy.y - enemy.height / 2 &&
                bullet.y < enemy.y + enemy.height / 2
            ) {
                // 当たった場合
                bullets.splice(index, 1);
                enemies.splice(enemyIndex, 1);
                score += 10;
            }
        });

        // 画面外に出たら削除
        if (bullet.y < 0) {
            bullets.splice(index, 1);
        }
    });

    // 敵の移動
    enemies.forEach((enemy) => {
        enemy.y += 6;

        // プレイヤーとの当たり判定
        if (
            player.x - player.width / 2 < enemy.x + enemy.width / 2 &&
            player.x + player.width / 2 > enemy.x - enemy.width / 2 &&
            player.y - player.height / 2 < enemy.y + enemy.height / 2 &&
            player.y + player.height / 2 > enemy.y - enemy.height / 2
        ) {
            // プレイヤーと敵が衝突した場合
            alert("ゲームオーバー！得点: " + score);
            resetGame();
        }

        // 画面外に出たら削除
        if (enemy.y > canvas.height + enemy.height / 2) {
            enemies.splice(enemies.indexOf(enemy), 1);
        }
    });

    // 新しい敵の追加
    if (Math.random() < 0.2) {
        const newEnemy = {
            x: Math.random() * canvas.width,
            y: -20,
            width: 30,
            height: 30
        };
        enemies.push(newEnemy);
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer();
    drawBullets();
    drawEnemies();

    // スコア表示
    ctx.fillStyle = "#000";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30);
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// キーボードの状態を管理
const keys = {
    left: false,
    right: false,
    space: false
};

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        keys.left = true;
    }
    if (event.key === "ArrowRight") {
        keys.right = true;
    }
    if (event.key === " ") {
        keys.space = true;
        shoot();
    }
});

document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowLeft") {
        keys.left = false;
    }
    if (event.key === "ArrowRight") {
        keys.right = false;
    }
    if (event.key === " ") {
        keys.space = false;
    }
});

function shoot() {
    const bullet = {
        x: player.x,
        y: player.y - player.height / 2
    };
    bullets.push(bullet);
}

function resetGame() {
    bullets.length = 0;
    enemies.length = 0;
    score = 0;
}


// ゲームループの開始
gameLoop();
