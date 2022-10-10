// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// Factory function to generate specimens
const pAequorFactory = (number,baseArray) => {
    return {
      specimenNum: number,
      dna: baseArray,
      mutate: function(){
        let mutationIndex = Math.floor(Math.random() * this.dna.length);
        let mutationBase = this.dna[mutationIndex]
        while(this.dna[mutationIndex]===mutationBase){
          this.dna[mutationIndex] = returnRandBase()
        }
      },
      compareDNA: function(anotherSpecimen){
        let dnaFraction = 100/(this.dna.length);
        let dnaFractionSum = 0;
        for(let i=0;i<this.dna.length;i++){
          if(this.dna[i]===anotherSpecimen.dna[i]){
            dnaFractionSum=dnaFractionSum+dnaFraction;
          }
        }
        console.log(`pAequor ${this.specimenNum} and pAequor ${anotherSpecimen.specimenNum} have ${dnaFractionSum.toFixed(2)}% DNA in common`)
      },
      willLikelySurvive: function(){
        let dnaFraction = 100/(this.dna.length);
        let dnaFractionSum = 0;
        for(let i=0;i<this.dna.length;i++){
          if(this.dna[i]==='C' || this.dna[i]==='G'){
            dnaFractionSum=dnaFractionSum+dnaFraction;
          }
        }
        if(dnaFractionSum.toFixed(2)>60){
          return true
        }else{
          return false;
        }
      },
      complementStrand: function(){
        let complementaryStrand =[];
        for(let i=0;i<this.dna.length;i++){
          switch (this.dna[i]){
            case 'A':
              complementaryStrand.push('T');
              break;
            case 'T':
              complementaryStrand.push('A');
              break;
            case 'C':
              complementaryStrand.push('G');
              break;
            case 'G':
              complementaryStrand.push('C');
              break;                                          
          }
        }
        return complementaryStrand;
      }
    }
}

// Generates specimens with over 60% of "C" or "G" bases
const generateViableSpecimens = (numberofSpecimens) => {
  viableSpecimens =[];
  let i=0;
  while(i<numberofSpecimens){
    let testSpecimen = pAequorFactory(i,mockUpStrand());
    if (testSpecimen.willLikelySurvive()){
      viableSpecimens.push(testSpecimen);
      i++;
    }
  }
  return viableSpecimens;
}

// Testing generation of specimens and DNA comparation
  /* let pAequor1 = pAequorFactory(1,mockUpStrand())
  let pAequor2 = pAequorFactory(2,mockUpStrand())
  console.log(pAequor1.dna.join(''))
  console.log(pAequor2.dna.join(''))
  pAequor1.compareDNA(pAequor2) */
//

// Testing likelihood of survival of an specimen
  /* console.log(pAequor1.willLikelySurvive()) */
//

// Generating viable specimens and logging DNA and complementary strand of first one to console
  /* generateViableSpecimens(30)
  console.log(viableSpecimens[0].dna)
  console.log(viableSpecimens[0].complementStrand()) */
//

// Logging first viable specimen DNA and its complementary strand
  /* console.log(viableSpecimens[0].dna.join(""))
  console.log(viableSpecimens[0].complementStrand().join("")) */







