import dataSource from './config/data-source';

dataSource.initialize()
.then(()=>{
    console.log('DATABASE CONNECTED');
})
.catch((error)=>{
    console.log(error);
});
