document.addEventListener("DOMContentLoaded", function () {
    const player = document.getElementById("player");
    const enemy = document.getElementById("enemy");

    function movePlayer(event) {
        // Move player with arrow keys
        const step = 10;
        if (event.key === "ArrowLeft" && player.offsetLeft > 0) {
            player.style.left = player.offsetLeft - step + "px";
        } else if (event.key === "ArrowRight" && player.offsetLeft + player.offsetWidth < window.innerWidth) {
            player.style.left = player.offsetLeft + step + "px";
        }
    }

    function moveEnemy() {
        // Move enemy down
        const step = 5;
        enemy.style.top = enemy.offsetTop + step + "px";

        // Check for collision with player
        if (isColliding(player, enemy)) {
            alert("Game Over!");
            resetGame();
        }

        // Check if enemy is out of the screen
        if (enemy.offsetTop > window.innerHeight) {
            resetEnemyPosition();
        }

        requestAnimationFrame(moveEnemy);
    }

    function isColliding(element1, element2) {
        const rect1 = element1.getBoundingClientRect();
        const rect2 = element2.getBoundingClientRect();
        return !(
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom ||
            rect1.right < rect2.left ||
            rect1.left > rect2.right
        );
    }

    function resetEnemyPosition() {
        const randomX = Math.floor(Math.random() * (window.innerWidth - enemy.offsetWidth));
        const randomY = -enemy.offsetHeight;
        enemy.style.left = randomX + "px";
        enemy.style.top = randomY + "px";
    }

    function resetGame() {
        resetEnemyPosition();
    }

    document.addEventListener("keydown", movePlayer);
    resetEnemyPosition();
    moveEnemy();
});
