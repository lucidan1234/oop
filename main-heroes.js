class Hero {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
    this.canFly = false;
    this.shield = false;
  }

  attacked(damage) {
    // daca eroul are propr canFly === true
    if (this.canFly) {
      let chance = Math.random(); // cream o valoare 'chance' care tine valoarea returnata prin apelarea metodei Math.random() - returneaza intre 0 si 1
      if (chance > 0.5) {
        console.log(this.name + " flew away.");
        damage = 0; // eroul a zburat si a evitat damage-ul
      }
    }

    // daca eroul are proprietatea shield === true , damage-ul este redus cu 20%;
    if (this.shield) {
      damage *= 0.8; //damage = damage * 0.8;  // damage-ul este redus cu 0.2 (20%);
      console.log(this.name + " defends with a shield. ");
    }

    this.hp -= damage;

    console.log(
      this.name +
        " has been atacked. HP reduced by " +
        damage +
        ". HP remaining: " +
        this.hp +
        "."
    );
  }
}

class WonderWoman extends Hero {
  constructor(name, hp) {
    super(name, hp); //chemam constructorul Parinte
    this.shield = true; // am suprascris proprietatea din clasa Parinte
  }

  attack(otherHero) {
    let damage = 30;
    console.log(this.name + " attacked with damage: " + damage + ".");
    otherHero.attacked(damage);
  }
}

class Cyborg extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
  }

  attack(otherHero) {
    let damage = 40;
    console.log(this.name + "attacked with damage: " + damage + ".");
    otherHero.attacked(damage);
  }
}

class Batman extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
    this.shield = true;
  }

  attack(otherHero) {
    let damage = 25;
    console.log(this.name + "attacked with damage: " + damage + ".");
    otherHero.attacked(damage);
  }
}

class Aquaman extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
    this.shield = true;
  }

  attack(otherHero) {
    let damage = 20;
    console.log(this.name + "attacked with damage: " + damage + ".");
    otherHero.attacked(damage);
  }
}
class Flash extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
    this.shield = true;
  }

  attack(otherHero) {
    let damage = 35;
    console.log(this.name + "attacked with damage: " + damage + ".");
    otherHero.attacked(damage);
  }
}
class Fight {
  constructor(hero1, hero2) {
    this.hero1 = hero1;
    this.hero2 = hero2;
    this.turn = 0;
  }

  performAttack() {
    if (this.turn === 0) {
      this.hero1.attack(this.hero2);
    } else {
      this.hero2.attack(this.hero1);
    }
  }

  changeTurn() {
    this.turn = 1 - this.turn;
  }

  findWinner() {
    let winnerText = "";
    if (this.hero1.hp > 0) {
      winnerText = this.hero1.name + " won with " + this.hero1.hp + " HP left.";
      console.log(winnerText);
    } else if (this.hero2.hp > 0) {
      winnerText = this.hero2.name + " won with " + this.hero2.hp + " HP left.";
      console.log(winnerText);
    } else {
      console.log("No heroes left allive.");
    }
    alert(winnerText);
    return winnerText;
  }
  go() {
    do {
      this.performAttack();
      this.changeTurn();
    } while (this.hero1.hp > 0 && this.hero2.hp > 0);

    this.findWinner();
  }
}

let w = new WonderWoman("wonderwoman", 30);
let c = new Cyborg("cyborg", 40);
let b = new Batman("batman", 25);
let a = new Aquaman("aquaman", 20);
let f = new Flash("flash", 35);
let epicFight = new Fight(w, a);

epicFight.go();
