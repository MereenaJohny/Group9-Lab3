function collatz(n){

      var k=0;
      var n=n;
      k=k+n+"->";
      console.log(k);
      while(n !== 1)
      {
        if(n%2==0)
        {
                  n=n/2;
        }
        else
        {
                 n= (n*3)+1;
        }
        k=k+n+"->";
      }
      k=k.substring(0, k.length - 2);
      return k;
}