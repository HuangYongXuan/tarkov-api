const { Tarkov } = require('tarkov');
const  fs = require('fs');
let hwid = ''
const t = new Tarkov('#1-3ec3ebfc397342c8c0bd476318c778e0:452baea1b73b431d6713787341e8c729:3d89928aac5d8577c0a9105fd981ecdd-07ad49786b7e8f1cdf57db653ba925c7-7882a58e59c6966ddd18a39b6cad9d6e-8a63d4139196ab6790b9780934b57a4a-ab2d93e0569ceab64c6ac0469e71b0d6-07ab1814c50a189b4881387b');

// Run everything in an async function
(async () => {

  // Login to tarkov, optionally also pass 2 factor code as a third param
  await t.login('15093565100@qq.com', '15093565100@qq.com');

  // Load all profiles we have
  const profiles = await t.getProfiles();

  // For this example, we're just going to grab the second profile
  const profile = await t.selectProfile(profiles[1]);

  // Load our i18n translations
  await t.getI18n('zh');

  // Load all traders
  const traders = await t.getTraders();

  // Let's get therapist from our array of traders
  // const therapist = traders.find(t => t._id === '54cb57776803fa99248b456e');

  // Get a list of items this trader sells.
  const items = await t.getItems();

  // console.log(profile,'profile');
  // console.log(items,'items');
  fs.writeFile('items.json', JSON.stringify(items),function(error){
    if(error){
      console.log('写入成功')
    }else{
      console.log('写入成功')
    }
  })
})();