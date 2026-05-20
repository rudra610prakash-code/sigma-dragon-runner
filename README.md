🐉 **Sigma Dragon Runner (JavaScript Game)**

A 2D browser runner game built with HTML, CSS, and JavaScript where a dino jumps to avoid incoming dragon obstacles.
Features smooth animations, collision detection, increasing difficulty, and interactive game sounds.

🎮 How to Play
⬆️ Arrow Up → Jump
⬅️ Arrow Left → Move Left
➡️ Arrow Right → Move Right
Avoid the dragon obstacles and score points!

**Dino Jump Animation Trigger** 
if (e.key === "ArrowUp") {
    dino.classList.add('animateDino');
    setTimeout(() => {
        dino.classList.remove('animateDino');
    }, 700);
}
