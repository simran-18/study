function toggle(...args)
{
    let count=0;
    let n=args.length;
   return function()
   {
     console.log(args[count%n])
     count++;
   }
};

const hello=toggle("hello");
hello();
hello();

const onOff=toggle("on","off");
onOff();
onOff();
onOff();
