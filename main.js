var lockImg = document.querySelector('.box')



lockImg.addEventListener('click',toggleLocks)

function toggleLocks(event) {
    for (var i = 1; i < 6; i++) {
        if (event.target.parentNode.id === `box${i}`) {
            document.getElementById(`locked${i}`).classList.toggle('hidden');
            document.getElementById(`unlocked${i}`).classList.toggle('hidden');
        }
    }
}

