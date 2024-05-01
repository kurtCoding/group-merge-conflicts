function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }

refactor
  function addPersonAsFriend(personA, personB) {
    personA.friends.push(personB);
    return personA;
main
  }

  module.exports = {
    createPerson,
    addPersonAsFriend,
  };
