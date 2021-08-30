const command = require('../Structures/Command.js')


module.exports = new command({
   name:"ok",
   description:"近隣のオーケーに行ってまいりました。店舗によって品ぞろえや清潔感とはずいぶん違うので、店舗巡りして自分の肌にあう店舗で買い物しています。車で荷物の出し入れが楽なところはやはり使い勝手がいいですよね。",
   async run(message){
       message.channel.send('近隣のオーケーに行ってまいりました。店舗によって品ぞろえや清潔感とはずいぶん違うので、店舗巡りして自分の肌にあう店舗で買い物しています。車で荷物の出し入れが楽なところはやはり使い勝手がいいですよね。')
   }
})