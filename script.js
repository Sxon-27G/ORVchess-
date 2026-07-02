let stage = 1;
let round = 1;

let playerHP = 100;

let gold = 1004;

let level = 1;
let XP = 0;

let boardUnits = Array(10).fill(null);

let streak = 0;

let XPbowl = [0, 0, 2, 6, 10, 20, 36, 60, 68, 68]

let playerInventory = Array(9).fill(null);

let units = [
    {
        name: "김독자",
        star: 1,
        stars: [
            {
                name: "김독자",
                cost: 5,
                hp: 1600,
                attack: 91,
                image: "images/kim_Dokja.webp"
                
            },
            {
                name: "구원의 마왕",
                cost: 14,
                hp: 3150,
                attack: 232,
                image: "images/구원의 마왕.jpg"
            },
            {
                name: "가장 오래된 꿈",
                cost: 44,
                hp: 5000,
                attack: 545,
                image: "images/가장 오래된 꿈.jpg"
            },
        ],
        image: "images/kim_Dokja.webp"
    },

    {
        name: "유중혁",
        star: 1,
        stars: [
            {
                name: "유중혁",
                cost: 5,
                hp: 1800,
                attack: 83,
                image: "images/yoo_Joonghyuk.webp"
                
            },
            {
                name: "철혈의 패왕",
                cost: 14,
                hp: 3020,
                attack: 215,
                image: "images/철혈의 패왕.webp"
            },
            {
                name: "은밀한 모략가",
                cost: 44,
                hp: 4910,
                attack: 620,
                image: "images/은밀한 모략가.webp"
            },
        ],
    },

    {
        name: "한수영",
        star: 1,
        stars: [
            {
                name: "한수영",
                cost: 6,
                hp: 2150,
                attack: 215,
                image: "images/han_Suyeong.jpg"
                
            },
            {
                name: "흑염마황",
                cost: 17,
                hp: 3920,
                attack: 401,
                image: "images/흑염마황.jpg"
            },
            {
                name: "거짓 종막의 설계자",
                cost: 53,
                hp: 7700,
                attack: 803,
                image: "images/거짓 종막의 설계자.jpg"
            },
        ],
    },

    {
        name: "정희원",
        star: 1,
        stars: [
            {
                name: "정희원",
                cost: 2,
                hp: 602,
                attack: 45,
                image: "images/jung_Heewon.webp"
                
            },
            {
                name: "멸악의 심판자",
                cost: 5,
                hp: 1730,
                attack: 80,
                image: "images/멸악의 심판자.webp"
            },
            {
                name: "멸마의 심판자",
                cost: 17,
                hp: 2150,
                attack: 116,
                image: "images/멸마의 심판자.webp"
            },
        ],
    },

    {
        name: "이길영",
        star: 1,
        stars: [
            {
                name: "이길영",
                cost: 1,
                hp: 456,
                attack: 25,
                image: "images/Lee_Gilyoung.webp"
                
            },
            {
                name: "충왕",
                cost: 3,
                hp: 821,
                attack: 80,
                image: "images/충왕.jpg"
            },
            {
                name: "음험한 책략가",
                cost: 9,
                hp: 1224,
                attack: 57,
                image: "images/업로드 예정.png"
            },
        ],
    },

    {
        name: "이현성",
        star: 1,
        stars: [
            {
                name: "이현성",
                cost: 2,
                hp: 709,
                attack: 41,
                image: "images/lee_Hyunsung.jpg"
                
            },
            {
                name: "강철검제",
                cost: 5,
                hp: 1870,
                attack: 79,
                image: "images/강철검제.jpg"
            },
            {
                name: "은빛 심장의 왕",
                cost: 17,
                hp: 3150,
                attack: 99,
                image: "images/은빛 심장의 왕.jpg"
            },
        ],
    },

    {
        name: "신유승",
        star: 1,
        stars: [
            {
                name: "신유승",
                cost: 3,
                hp: 740,
                attack: 55,
                image: "images/shin_Yuseung.webp"
                
            },
            {
                name: "비스트 테이머",
                cost: 8,
                hp: 1224,
                attack: 88,
                image: "images/비스트 테이머.jpg"
            },
            {
                name: "비스트 로드",
                cost: 26,
                hp: 1907,
                attack: 191,
                image: "images/비스트 로드.webp"
            },
        ],
    },

    {
        name: "이설화",
        star: 1,
        stars: [
            {
                name: "이설화",
                cost: 3,
                hp: 870,
                attack: 45,
                image: "images/lee_Seolhwa.jpg"
                
            },
            {
                name: "의선",
                cost: 8,
                hp: 1300,
                attack: 77,
                image: "images/업로드 예정.png"
            },
            {
                name: "설원을 물들이는 약사",
                cost: 26,
                hp: 2150,
                attack: 102,
                image: "images/업로드 예정.png"
            },
        ],
    },

    {
        name: "유미아",
        star: 1,
        stars: [
            {
                name: "유미아",
                cost: 4,
                hp: 1000,
                attack: 83,
                image: "images/yoo_Mia.webp"
                
            },
            {
                name: "위대한 모략의 아우",
                cost: 11,
                hp: 1850,
                attack: 102,
                image: "images/업로드 예정.png"
            },
            {
                name: "우주의 현을 삼킨 자",
                cost: 35,
                hp: 3100,
                attack: 135,
                image: "images/업로드 예정.png"
            },
        ],
    },

    {
        name: "유상아",
        star: 1,
        stars: [
            {
                name: "유상아",
                cost: 4,
                hp: 1200,
                attack: 79,
                image: "images/yoo_Sangah.jpg"
                
            },
            {
                name: "월하현제",
                cost: 11,
                hp: 2920,
                attack: 118,
                image: "images/업로드 예정.png"
            },
            {
                name: "달빛 아래에 핀 연꽃",
                cost: 35,
                hp: 3100,
                attack: 157,
                image: "images/업로드 예정.png"
            },
        ],
    }
];

let shop = [];

let odds = [
    [0, 0, 0, 0, 0, 0, 0],
    [100, 0, 0, 0, 0, 0, 0],
    [85, 15, 0, 0, 0, 0, 0],
    [75, 20, 5, 0, 0, 0, 0],
    [65, 25, 10, 0, 0, 0, 0],
    [50, 30, 18.5, 1.5, 0, 0, 0],
    [45, 22.5, 22.5, 8, 2, 0, 0],
    [37.85, 20, 20, 15, 7, 0.05, 0.1],
    [27.5, 17, 18, 18, 18, 0.5, 1],
    [17, 12, 17, 20, 27.5, 2.5, 4],
    [8, 6, 18, 20, 33, 5, 10]
];

function isGameOver(){

    if(playerHP <= 0){

        message("시나리오 추방 상태에서는 행동할 수 없습니다.");

        return true;
    }

    return false;
}

function getRandomCost(){
    let r = Math.random() * 100;
    let sum = 0;

    for(let cost = 1; cost <= 7; cost++){
        sum += odds[level][cost - 1];

        if(r <= sum){
            return cost;
        }
    }

    return 1;
}

function refreshShopFree(){

    shop = [];

    for(let i = 0; i < 5; i++){

        let cost = getRandomCost();

        let candidates =
            units.filter(
                unit => unit.stars[0].cost === cost
            );

        if(candidates.length === 0){
            i--;
            continue;
        }

        let r =
            Math.floor(
                Math.random() * candidates.length
            );

        shop.push({
            ...candidates[r],
            sold:false
        });
    }
}

function refreshShop(){

    if(isGameOver()){
        return;
    }
    let shopDiv = document.getElementById("shop");

    shopDiv.innerHTML = "";

    for(let i = 0; i < shop.length; i++){

        let u = shop[i];

        if(u.sold){

            shopDiv.innerHTML += `

                <div class="card">

                    <p> </p>

                </div>
            `;

            continue;
        }

        let starInfo =
            u.stars[u.star - 1];

        shopDiv.innerHTML += `

            <div class="card">

                <img src="${starInfo.image}" class="unitImage">

                <h3>${i + 1}. ${starInfo.name}</h3>

                <p>코스트 : ${starInfo.cost}◎</p>

                <p>HP : ${starInfo.hp}</p>

                <p>공격력 : ${starInfo.attack}</p>

                <button onclick="buyUnit(${i})">
                    구매
                </button>

            </div>
        `;
    }
}

function renderInventory(){

    let invDiv = document.getElementById("inventory");

    invDiv.innerHTML = "";

    for(let i = 0; i < playerInventory.length; i++){

        let unit = playerInventory[i];

        if(unit == null){

            invDiv.innerHTML += `

                <div class="card">

                    ${i + 1}번 슬롯

                    <br><br>

                    +++ 빈 슬롯 +++

                </div>
            `;
        }

        else{

    let starInfo = unit.stars[unit.star - 1];

    invDiv.innerHTML += `

            <div class="card">

                <img src="${starInfo.image}" class="unitImage">

                <h3>${i + 1}번 슬롯</h3>

                <p>${starInfo.name}</p>

                <p>(${unit.name} ${unit.star}성)</p>

                <p>${starInfo.cost}◎</p>

                <button onclick="sellUnit(${i})">
                    판매
                </button>

                <button onclick="placeUnit(${i})">
                    배치
                </button>

            </div>
         `;
        }
    }
}

function buyUnit(index){

    if(isGameOver()){
        return;
    }
    let target = shop[index];

    let starInfo =
    target.stars[target.star - 1];

    if(gold < starInfo.cost){

        message("골드가 부족합니다.");

        return;
    }

    let emptyIndex =
        playerInventory.findIndex(v => v == null);

    if(emptyIndex == -1){

        message("인벤토리가 가득 찼습니다.");

        return;
    }

    gold -= starInfo.cost;

    playerInventory[emptyIndex] = target;

    shop[index].sold = true;

    message(`${target.name} 구매 완료.`);

    checkMerge();

    renderAll();
}

function sellUnit(index){

    if(isGameOver()){
        return;
    }
    let unit = playerInventory[index];

    if(unit == null){

        return;
    }
    let starInfo =
        unit.stars[unit.star - 1];

    gold += starInfo.cost;

    playerInventory[index] = null;

    message(`${unit.name} 판매 완료.`);

    renderAll();
}

function nextRound(){

    round++;

    XP += 2;

    while(level < 10 && XP >= XPbowl[level]){

        XP -= XPbowl[level];

        level++;

        message("Level up!");
    }

    gold += 5;

    renderAll();
}

function getPower(unit){

    let starInfo =
        unit.stars[unit.star - 1];

    return Math.floor(starInfo.hp / 10)
        + starInfo.attack;
}

function buyXP(){

    if(isGameOver()){
        return;
    }
    if(gold < 4){
        message("골드가 부족합니다.");
        return;
    }

    if(level >= 10){
        message("이미 최대 레벨입니다.");
        return;
    }

    gold -= 4;
    XP += 4;

    let leveledUp = false;

    while(level < 10
        && XP >= XPbowl[level]){

        XP -= XPbowl[level];

        level++;

        leveledUp = true;
    }   

    if(leveledUp){

        message("XP 구매 완료. Level up!");
    }

    else{

        message("XP 구매 완료.");
    }

    renderAll();
}

function calcTeamPower(){

    let total = 0;

    for(let i = 0; i < boardUnits.length; i++){

        let unit = boardUnits[i];

        if(unit != null){
            total += getPower(unit);
        }
    }

    return total;
}

function battle(){

    if(isGameOver()){
        return;
    }
    let myPower = calcTeamPower();

    let enemyPower =
        Math.floor(Math.random() * 151)
        + (stage * 60)
        + (round * 25);

    let resultText = "";

    if(myPower >= enemyPower){

        let rewardGold =
            5 + Math.min(
                Math.floor(gold / 10),
                5
            );

        gold += rewardGold;

        XP += 2;

        if(streak >= 0){

            streak++;
        }

        else{

            streak = 1;
        }

        resultText =
            `승리!\n
내 전투력 : ${myPower}\n
적 전투력 : ${enemyPower}\n
+${rewardGold}◎ 획득`;

    }

    else{

        XP += 2;

        if(streak <= 0){

            streak--;
        }

        else{

            streak = -1;
        }

        let damage = Math.min(20, 5 + round + stage * 2);

        playerHP -= damage;

        if(playerHP < 0){
            playerHP = 0;
        }

        resultText =
            `패배...\n
내 전투력 : ${myPower}\n
적 전투력 : ${enemyPower}`;
    }

    if(level < 10
        && XP >= XPbowl[level]){

        XP -= XPbowl[level];

        level++;

        resultText += `\n\nLevel up!`;
    }

    round++;

    if(round > 7){

        stage++;

        round = 1;
    }

    refreshShopFree();

    if(playerHP <= 0){

    playerHP = 0;

    message("당신은 시나리오에서 추방되었습니다.");

    renderAll();

    return;
}

    message(resultText);

    renderAll();
}

function message(text){

    document.getElementById("message").innerText = text;
}

function renderStatus(){

    document.getElementById("status").innerHTML = `

        <div class="box">

            <h2>현재 상태</h2>

            <p>현재 구간 : ${stage}-${round}</p>

            <p>현재 골드 : ${gold}◎</p>

            <p>화신의 체력 : ${playerHP}</p>

            <p>
                Level. ${level}

                ${
                    level == 10

                    ? "(MAX)"

                    : `(${XP} / ${XPbowl[level]})`
                }
            </p>

            ${
                streak > 0

                ? `<p>연승 : ${streak}</p>`

                : streak < 0

                ? `<p>연패 : ${Math.abs(streak)}</p>`

                : `<p>연승/연패 : 0</p>`
            }

        </div>
    `;
}

function renderShop(){

    let shopDiv =
        document.getElementById("shop");

    shopDiv.innerHTML = "";

    for(let i = 0; i < shop.length; i++){

        let u = shop[i];

        if(u.sold){

            shopDiv.innerHTML += `

                <div class="card">
                </div>
            `;

            continue;
        }

        let starInfo =
            u.stars[u.star - 1];

        shopDiv.innerHTML += `
            <div class="card c${starInfo.cost}">

                <img src="${starInfo.image}" class="unitImage">

                <h3>
                    ${i + 1}.
                    ${starInfo.name}
                </h3>

                <p>
                    코스트 :
                    ${starInfo.cost}◎
                </p>

                <p>
                    HP :
                    ${starInfo.hp}
                </p>

                <p>
                    공격력 :
                    ${starInfo.attack}
                </p>

                <button
                onclick="buyUnit(${i})">

                    구매

                </button>

            </div>
        `;
    }
}

function renderAll(){

    renderStatus();

    renderShop();

    renderBoard();

    renderInventory();
}

refreshShopFree();
renderAll();

function checkMerge(){

    let allUnits = [];

    for(let i = 0; i < playerInventory.length; i++){

        if(playerInventory[i] != null){

            allUnits.push({
                place:"inventory",
                index:i,
                unit:playerInventory[i]
            });
        }
    }

    for(let i = 0; i < boardUnits.length; i++){

        if(boardUnits[i] != null){

            allUnits.push({
                place:"board",
                index:i,
                unit:boardUnits[i]
            });
        }
    }

    for(let star = 1; star <= 2; star++){

        for(let i = 0; i < allUnits.length; i++){

            let base = allUnits[i];

            if(base.unit.star != star) continue;

            let same = [];

            for(let j = 0; j < allUnits.length; j++){

                let target = allUnits[j];

                if(target.unit.name == base.unit.name &&
                   target.unit.star == star){

                    same.push(target);
                }
            }

            if(same.length >= 3){

                let upgrade = same.find(v => v.place == "board") || same[0];

                upgrade.unit.star++;

                for(let k = 0; k < 3; k++){

                    if(same[k] == upgrade) continue;

                    if(same[k].place == "inventory"){

                        playerInventory[same[k].index] = null;
                    }

                    else{

                        boardUnits[same[k].index] = null;
                    }
                }

                compactInventory();

                message(`${upgrade.unit.name} ${star + 1}성으로 합성되었습니다.`);

                renderAll();

                checkMerge();

                return;
            }
        }
    }
}

function compactInventory(){

    let newInventory =
        playerInventory.filter(unit => unit != null);

    while(newInventory.length < 9){
        newInventory.push(null);
    }

    playerInventory = newInventory;
}

function placeUnit(index){

    if(isGameOver()){
        return;
    }
    let unit = playerInventory[index];

    if(unit == null){
        message("해당 슬롯은 비어 있습니다.");
        return;
    }

    let placedCount =
        boardUnits.filter(unit => unit != null).length;

    if(placedCount >= level){
        message(`해당 유닛을 넣으려면 Level. ${level + 1}을 달성하세요.`);
        return;
    }

    let emptyIndex =
        boardUnits.findIndex(unit => unit == null);

    if(emptyIndex == -1){
        message("전장에 배치할 수 있는 칸이 없습니다.");
        return;
    }

    boardUnits[emptyIndex] = unit;
    playerInventory[index] = null;

    compactInventory();

    message("배치 완료!");

    renderAll();
}

function renderBoard(){

    let boardDiv = document.getElementById("board");

    boardDiv.innerHTML = "";

    for(let i = 0; i < boardUnits.length; i++){

        let unit = boardUnits[i];

        if(i >= level){

            boardDiv.innerHTML += `
                <div class="card locked">
                    <h3>${i + 1}번 슬롯</h3>
                    <p>Level. ${i + 1} 달성 시 잠금 해제</p>
                </div>
            `;

            continue;
        }

        if(unit == null){

            boardDiv.innerHTML += `
                <div class="card">
                    <h3>${i + 1}번 슬롯</h3>
                    <p>++ 빈 슬롯 ++</p>
                </div>
            `;

            continue;
        }

        let starInfo =
            unit.stars[unit.star - 1];

        boardDiv.innerHTML += `
            <div class="card">
                <img src="${starInfo.image}" class="unitImage">

                <h3>${i + 1}번 칸</h3>

                <p>${starInfo.name}</p>
                <p>(${unit.name} ${unit.star}성)</p>

                <button onclick="retractUnit(${i})">
                    회수
                </button>
            </div>
        `;
    }
}

function rerollShop(){

    if(isGameOver()){
        return;
    }

    if(gold < 2){

        message("골드가 부족합니다.");

        return;
    }

    gold -= 2;

    refreshShopFree();

    renderAll();
}

function retractUnit(index){

    if(isGameOver()){
        return;
    }
    let unit = boardUnits[index];

    if(unit == null){
        message("해당 전장 슬롯은 비어 있습니다.");
        return;
    }

    let emptyIndex =
        playerInventory.findIndex(unit => unit == null);

    if(emptyIndex == -1){
        message("인벤토리가 가득 차 있어 회수할 수 없습니다.");
        return;
    }

    playerInventory[emptyIndex] = unit;
    boardUnits[index] = null;

    message(`${unit.name} 회수 완료.`);

    renderAll();
}

refreshShopFree();

renderAll();