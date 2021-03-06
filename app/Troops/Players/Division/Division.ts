import { Solder } from "./Solders/Solder";

export class Division {

   public solders: Solder[] = [];
   private id: string;

   public nextState() {
      this.solders.forEach((solder) => {
         solder.nextState();
      });
   }

   public addSolder(x: number, y: number) {
      this.solders.push(new Solder(x, y));
   }

}
