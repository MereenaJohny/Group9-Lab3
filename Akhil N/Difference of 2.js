function twosDifference(input){
 var ar=input;
      var con=[];
      for(i=0;i<ar.length;i++)
      {
             for(j=0;j<ar.length;j++)
             {
              if(ar[j]-ar[i]===2)
              {
                con.push([ar[i],ar[j]]);              
              }
             }
      }
      return con;
}