import 'phaser';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    create() {
        // ボールの追加
        this.ball = this.add.circle(400, 300, 10, 0xFFFFFF, 1);

        // パドルの追加
        this.paddle = this.add.rectangle(400, 550, 100, 20, 0xFFFFFF, 1);

        // ブロックの追加
        this.blocks = this.physics.add.staticGroup({
            key: 'block',
            repeat: 9,
            setXY: { x: 60, y: 100, stepX: 70 }
        });

        this.blocks.children.iterate((block) => {
            block.setFillStyle(0xFFFFFF, 1);
        });

        this.physics.add.collider(this.ball, this.paddle);
        this.physics.add.collider(this.ball, this.blocks, this.hitBlock, null, this);

        // キー入力の追加
        this.cursors = this.input.keyboard.createCursorKeys();

        // ボールの速度の設定
        this.ball.setVelocity(200, -200);
    }

    update() {
        // パドルの移動
        if (this.cursors.left.isDown) {
            this.paddle.setVelocityX(-300);
        } else if (this.cursors.right.isDown) {
            this.paddle.setVelocityX(300);
        } else {
            this.paddle.setVelocityX(0);
        }
    }

    hitBlock(ball, block) {
        block.disableBody(true, true); // ブロックを非表示に
    }
}
