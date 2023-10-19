// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory Function
const pAequorFactory = (num, bases) => {
  return {

    // Unique identifier of the specimen
    specimenNum: num,

    // Array containing the genetic information of the specimen
    dna: bases,

    // Function that randomly mutates one strand of DNA
    mutate: function() {
      let baseIndex = Math.floor(Math.random() * this.dna.length);
      let newBase;
      do {
        newBase = returnRandBase();
      } while (newBase === this.dna[baseIndex]);
      this.dna[baseIndex] = newBase;
    },

    // Function that returns a string that reflects the similarity that the DNA that two specimens have
    compareDNA: function(p2) {
      let matches = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === p2.dna[i])
          matches++;
      }
      let percentage = ((matches / this.dna.length) * 100).toFixed(0);
      console.log("Specimen #" + this.dna.specimenNum + " and specimen #" + p2.specimenNum + " have " + percentage + "% of DNA in common.")
    },

    // A specimen is likely to survive if it has at least 60% either C or G strands. This function returns true if it meets this criteria and false if it does not.
    willLikelySurvive: function() {
      let survivability = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G')
          survivability++;
      }
      survivability /= this.dna.length;
      survivability = (survivability * 100).toFixed(0);
      if (survivability >= 60)
        return true;
      else
        return false;
    }
  };
};
