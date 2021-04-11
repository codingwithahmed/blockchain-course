
 const SHA256 = require('crypto-js/sha256');

 class Block {
 
     constructor(data){
         this.id = 10;
         this.nonce = 251693;
           this.body = data;
           this.hash = "";
     }
     
    
       generateHash() {
           let self = this;

           var promise = new Promise(function(resolve, reject) {
           let str_obj = JSON.stringify(self)
           self.hash =  SHA256(str_obj)
          
            if (self.hash) {
              resolve(self);
            }
            else {
              reject(Error("It broke"));
            }
          });
         
          return promise
     }
 }
 
 // Exporting the class Block to be reuse in other files
 module.exports.Block = Block;