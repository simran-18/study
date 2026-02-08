class StoreData{
    constructor(){
        this.data={}
        this.events={}
    }
    add(key,value){
    const keyExists = key in this.data;
    const oldValue = this.data[key];

    // Update only if new or changed
    if (!keyExists || oldValue !== value) {
      this.data[key] = value;
      this.trigger(key, oldValue, value);
    }
    }
    has(key){
        return key in this.data;
    }
    on(event,listener){
        if(!this.events[event]){
            this.events[event]=[]
        }
        this.events[event].push(listener);
    }
    trigger(key,oldValue,newValue){
        const changeEvent=`change:${key}`;
        const genericKey=key;
        if(this.events[changeEvent]){
         this.events[changeEvent].forEach((listener)=>{
            listener(oldValue, newValue, key)
        })
        }
        if(this.events[genericKey]){
         this.events[genericKey].forEach((listener)=>{
            listener(oldValue, newValue, key)
        })
        }
    }
}



let store=new StoreData();
store.add("name","joe");
store.add("age",30);
console.log(store.has('age'));    // true
console.log(store.has('animal')); // false
store.on('change:name', (old_val, new_val, key) => {
  console.log(`old ${key}: ${old_val}, new ${key}: ${new_val}`);
});

store.add('name', 'john');

store.on('age', (old_val, new_val, key) => {
  console.log(`old ${key}: ${old_val}, new ${key}: ${new_val}`);
});

store.add('age', 26);

store.on('change:age', (old_val, new_val, key) => {
  console.log(old_val > new_val ? 'older now' : '');
});

store.add('age', 28);
store.add('age', 45);