//import axios from 'axios';
  //import uploadFile from '../../lib/uploadFile.cjs';
  import uploadImage from '../lib/uploadImage.js';

  const handler = async (m, { conn, args, text }) => {
    if (!text) throw 'Masukkan Berapa Scale\nExample .hd reply img 5';
    try{
    m.reply(wait)   
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '' 
    if (!mime) throw 'Mana foto nya?'
    const isTele = /image\/(png|jpe?g|gif)|viewOnce|video\/mp4/.test(mime)    
    const media = await q.download();
    const link = await uploadImage(media);
    const res = await axios.get(clph+`api/upscale/v2?img=${link}&scale=${text}&apikey=` + clphkey);
    conn.sendFile(m.chat, res.data.data.img, 'hd.jpg', wm, m, false); // Make sure to define wm
    } catch(e) {
    console.log(e)
    throw `Error: Prediction failed: CUDA out of memory. Tried to allocate 4.13 GiB (GPU 0; 14.58 GiB total capacity; 6.05 GiB already allocated; 1.58 GiB free; 12.03 GiB reserved in total by PyTorch) If reserved memory is >> allocated memory try setting max_split_size_mb to avoid fragmentation.  See documentation for Memory Management and PYTORCH_CUDA_ALLOC_CONF`
    }
  };
  handler.help = handler.command = ['upscale', 'endhance', 'hdr'];
  handler.tags = ['tools'];
  handler.premium = true
  export default handler;