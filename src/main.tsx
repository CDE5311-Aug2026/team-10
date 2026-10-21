import React,{useState,useEffect,useRef,useCallback} from 'react';
import {createRoot} from 'react-dom/client';
import {createPortal} from 'react-dom';
import {ArrowUp,Image,Mic,X} from 'lucide-react';
import {DesignContext,type Binding,type NodeProps} from './design-runtime';
import {screens} from './screens';
import prototype from './prototype.json';
import {useStored,type Drink} from './storage';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/400-italic.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import './design.css';
import './styles.css';
const HOME='131:1295';
const homeStates=[HOME,'164:1801','173:980','175:2351','175:2579','178:3710'];
const foodStates=['151:902','175:1152','175:1219','151:1122','175:1286','175:1355'];
const galleryRecipes:Record<string,{name:string;date:string;insight:string;ingredients:[string,string][];estimate:string}>={
 'card-1':{name:'Negroni',date:'Oct 07',insight:'Bitter orange and herbal notes meet a rich, spirit-forward finish. Equal parts gin, bitter aperitif and vermouth.',ingredients:[['Gin','30 ml'],['Campari','30 ml'],['Sweet vermouth','30 ml'],['Orange peel','1 piece'],['Ice','1 large cube']],estimate:'180 kcal · 24% ABV · 12 g sugar'},
 'card-2':{name:'French 75',date:'Oct 06',insight:'A light, refreshing cocktail with a sparkling finish. Despite its delicate taste, the French 75 contains alcohol from both gin and champagne. Sip mindfully and enjoy at your own pace.',ingredients:[['Gin','30 ml'],['Champagne','60 ml'],['Fresh lemon juice','15 ml'],['Simple syrup','15 ml'],['Lemon twist','1 piece']],estimate:'140 kcal · 18% ABV · 8 g sugar'},
 'card-3':{name:'Gin & Tonic',date:'Oct 04',insight:'Crisp botanicals and tonic bitterness, finished with fresh lime. Tonic sweetness varies by brand.',ingredients:[['Gin','45 ml'],['Tonic water','120 ml'],['Lime wedge','1 piece'],['Ice','As needed']],estimate:'120 kcal · 12% ABV · 6 g sugar'},
 'card-4':{name:'Whiskey Sour',date:'Oct 05',insight:'Whiskey warmth balanced with bright lemon and sweetness. Optional egg white adds a soft foam.',ingredients:[['Whiskey','60 ml'],['Lemon juice','22.5 ml'],['Simple syrup','15 ml'],['Egg white (opt.)','15 ml'],['Cherry','1 piece']],estimate:'160 kcal · 22% ABV · 15 g sugar'},
 'card-5':{name:'Vodka Martini',date:'Sep 28',insight:'Clean and dry with a subtle vermouth aroma. An olive adds a savory finish to this spirit-forward classic.',ingredients:[['Vodka','60 ml'],['Dry vermouth','10 ml'],['Olive','1 piece'],['Ice for stirring','As needed']],estimate:'110 kcal · 25% ABV · 2 g sugar'},
 'card-6':{name:'Mojito',date:'Sep 25',insight:'Fresh mint and lime brighten white rum. Soda adds a sparkling finish, with syrup balancing the citrus.',ingredients:[['White rum','45 ml'],['Lime juice','25 ml'],['Simple syrup','15 ml'],['Mint','6 leaves'],['Soda water','60 ml']],estimate:'150 kcal · 10% ABV · 10 g sugar'},
 'card-7':{name:'Old Fashioned',date:'Sep 20',insight:'Rich whiskey with aromatic bitters and orange oils. A small amount of syrup softens the bold finish.',ingredients:[['Bourbon','60 ml'],['Simple syrup','5 ml'],['Angostura bitters','2 dashes'],['Orange peel','1 piece'],['Ice','1 cube']],estimate:'170 kcal · 30% ABV · 5 g sugar'},
 'card-8':{name:'Cosmopolitan',date:'Sep 18',insight:'Bright cranberry and lime with orange notes. A tart, lightly sweet cocktail served chilled in a martini glass.',ingredients:[['Vodka','45 ml'],['Cranberry juice','30 ml'],['Lime juice','15 ml'],['Triple sec','15 ml']],estimate:'140 kcal · 20% ABV · 12 g sugar'},
};
function GalleryRecipeFace({recipe}:{recipe:typeof galleryRecipes[string]}){return <div className="gallery-recipe-face"><div className="gallery-recipe-heading"><strong>{recipe.name}</strong><span>{recipe.date}</span></div><section className="gallery-recipe-insight"><b>AI Insight:</b><p>{recipe.insight}</p></section><section className="gallery-recipe-ingredients"><b>Ingredients</b>{recipe.ingredients.map(([name,amount])=><div key={name}><span>{name}</span><span>{amount}</span></div>)}</section><div className="gallery-recipe-estimate"><span>Estimates per serving</span><span>{recipe.estimate}</span></div></div>}
const textOf=(c:any):string=>typeof c==='string'?c.trim():typeof c==='number'?String(c):Array.isArray(c)?c.map(textOf).join(' '):React.isValidElement<{children?:React.ReactNode}>(c)?textOf(c.props.children):'';
const fieldDefinitions:Record<string,{key:string;placeholder:string;options?:string[];type?:string}>={
 '48:339':{key:'frequency',placeholder:'Select frequency',options:['Rarely','Monthly','Weekly','Several times a week','Daily']},
 '48:344':{key:'amount',placeholder:'Select amount',options:['1 drink','2-3 drinks','4-5 drinks','6 or more drinks']},
 '48:349':{key:'drinks',placeholder:'Select drinks',options:['Cocktails','Wine','Beer','Spirits','Alcohol-free']},
 '48:354':{key:'flavors',placeholder:'Select flavors',options:['Citrus','Sweet','Bitter','Herbal','Fruity','Dry']},
 '48:359':{key:'effects',placeholder:'Select effects',options:['None','Flushed skin','Headache','Poor sleep','Other','Prefer not to say']},
 '48:366':{key:'age',placeholder:'Select age',type:'number'},
 '48:371':{key:'gender',placeholder:'Select gender',options:['Woman','Man','Non-binary','Self-describe','Prefer not to say']},
 '48:376':{key:'height',placeholder:'Select height',type:'number'},
 '48:381':{key:'weight',placeholder:'Select weight',type:'number'},
 '48:389':{key:'medication',placeholder:'Select medication',options:['None','Taking medication','Prefer not to say']},
 '48:394':{key:'cycle',placeholder:'Select cycle',options:['Yes','No','Not applicable','Prefer not to say']},
 '48:399':{key:'goal',placeholder:'Select goal',options:['Maintain','Lose weight','Gain weight','No goal','Prefer not to say']},
 '131:1063':{key:'medication',placeholder:'Select medication',options:['None','Taking medication','Prefer not to say']},
 'I131:1079;131:1063':{key:'cycle',placeholder:'Are you in period',options:['Yes','No','Not applicable','Prefer not to say']},
 'I131:1087;131:1063':{key:'goal',placeholder:'Weight Goal',options:['Maintain','Lose weight','Gain weight','No goal']},
 'I131:1095;131:1063':{key:'flavors',placeholder:'Select Flavor',options:['Citrus','Sweet','Bitter','Herbal','Fruity','Dry']},
 'I131:1103;131:1063':{key:'abv',placeholder:'Select ABV level',options:['Alcohol-free','Low alcohol','Classic']}
};
type ChatMessage={role:'user'|'assistant';text:string};
type Timer={remaining:number;endsAt:number|null};
function App(){
 const normalizeRoute=(id:string)=>['211:2116','73:196'].includes(id)?'35:189':id;
 const readRoute=()=>{const id=normalizeRoute(decodeURIComponent(location.hash.slice(1)));return screens[id]?id:HOME};
 const [header,setHeader]=useState<HTMLDivElement|null>(null);const [screen,setScreen]=useState(readRoute);const [footer,setFooter]=useState<HTMLDivElement|null>(null);const [scale,setScale]=useState(1);const [toast,setToast]=useState('');
 const [prefs,setPrefs]=useStored<Record<string,string>>('preferences',{});const [favorites,setFavorites]=useStored<string[]>('favorites',[]);const [drinks,setDrinks]=useStored<Drink[]>('drinks',[]);const [plan,setPlan]=useStored('plan',{who:'',occasion:''});const [selectedDrink,setSelectedDrink]=useStored('selected-drink','');const [selectedFood,setSelectedFood]=useStored('selected-food','');
 const [flippedCard,setFlippedCard]=useState<string|null>(null);
 const [time,setTime]=useStored<Timer>('pace-timer',{remaining:1200,endsAt:null});const [waterTime,setWaterTime]=useStored<Timer>('water-timer',{remaining:1800,endsAt:null});const [water,setWater]=useStored('water-amount',125);const [waterTotal,setWaterTotal]=useStored('water-total',0);
 const [interval,setIntervalValue]=useStored('check-in-interval','30 minutes');const [lastDrink,setLastDrink]=useState('');const [waterGoal,setWaterGoal]=useState('');
 const [chat,setChat]=useStored<ChatMessage[]>('chat',[]);const [chatInput,setChatInput]=useState('');const [photo,setPhoto]=useState('');const [chatAttachment,setChatAttachment]=useState('');
 const shell=useRef<HTMLDivElement>(null);const scroller=useRef<HTMLDivElement>(null);const uploadRef=useRef<HTMLInputElement>(null);const toastTimer=useRef<ReturnType<typeof setTimeout>|null>(null);
 const notify=useCallback((t:string)=>{setToast(t);if(toastTimer.current)clearTimeout(toastTimer.current);toastTimer.current=setTimeout(()=>setToast(''),3500)},[]);
 const navigate=useCallback((requestedId:string,preserveScroll=false)=>{const id=normalizeRoute(requestedId);if(!screens[id])return;setScreen(id);history.pushState(null,'','#'+encodeURIComponent(id));if(!preserveScroll)scroller.current?.scrollTo({top:0});},[]);
 useEffect(()=>{const fn=()=>{setScreen(readRoute());scroller.current?.scrollTo({top:0})};window.addEventListener('popstate',fn);return()=>window.removeEventListener('popstate',fn)},[]);
 useEffect(()=>{if(!shell.current)return;const ro=new ResizeObserver(([e])=>setScale(Math.min(1,e.contentRect.width/402)));ro.observe(shell.current);return()=>ro.disconnect()},[]);
 useEffect(()=>{document.title='SIP:O · '+screens[screen].name;},[screen]);
 useEffect(()=>{if(!time.endsAt&&!waterTime.endsAt)return;const tick=()=>{const now=Date.now();for(const [timer,update,label] of [[time,setTime,'Your next mindful check-in'],[waterTime,setWaterTime,'Time for a water break']] as const){if(!timer.endsAt)continue;const remaining=Math.max(0,Math.ceil((timer.endsAt-now)/1000));if(!remaining){update({remaining:0,endsAt:null});notify(label);navigator.vibrate?.(150)}else update({...timer,remaining})}};tick();const handle=window.setInterval(tick,1000);return()=>clearInterval(handle)},[time.endsAt,waterTime.endsAt,notify]);
 const toggleFavorite=(key:string)=>setFavorites(old=>old.includes(key)?old.filter(x=>x!==key):[...old,key]);
 const assistantAnswer=(question:string)=>{
  const q=question.toLowerCase();
  if(/negroni|vermouth|swap/.test(q))return 'Try 30 ml gin, 30 ml bitter aperitif and 15 ml sweet vermouth. For a drier flavor, try dry vermouth instead. Check labels: sugar varies by brand. Soda adds volume, but doesn’t remove alcohol or sugar.';
  if(/history|logged|today/.test(q))return drinks.length?`You have logged ${drinks.length} drink${drinks.length===1?'':'s'} in this browser. Your latest drink is ${drinks.at(-1)?.name}. You can view it in Gallery.`:'You haven’t logged a drink yet. Open Scan to confirm a drink and add it to your history.';
  if(/water|hydrat/.test(q))return `You have logged ${waterTotal} ml of water. Open Stay Hydrated on Home to set your next check-in.`;
  if(/ingredient|recipe|french/.test(q))return 'For the French 75 in your gallery: gin 30 ml, champagne 60 ml, fresh lemon juice 15 ml, and simple syrup 15 ml. Tap its card to view your design’s recipe details.';
  if(/sugar|lighter|alcohol.free/.test(q))return 'Your design includes Citrus Sparkler, White Wine Spritzer, and Low-Alcohol Mojito. Select your occasion on Home to compare their estimated alcohol, sugar, and calories.';
  return 'I can show your logged drinks, water total, and the recipes and lighter options included in this app. Try “my drink history” or “lighter Negroni”. This local guide uses built-in answers; online AI is not connected.';
 };
 const send=(input:string)=>{if(!input.trim()&&!chatAttachment){navigate('87:218');return}setChat(old=>[...old,{role:'user',text:input.trim()||'Attached a drink photo.'},{role:'assistant',text:chatAttachment?'Your photo is attached locally. Image recognition is not connected; use the sample drink in Scan or enter confirmed drink information.':assistantAnswer(input)}]);setChatInput('');navigate('87:218');};
 const mic=()=>{const api=(window as any).SpeechRecognition||(window as any).webkitSpeechRecognition;if(!api){notify('Voice input is unavailable in this browser. You can type your message.');return}const speech=new api();speech.lang='en-US';speech.onresult=(e:any)=>{setChatInput(e.results[0][0].transcript);navigate('87:218')};speech.onerror=()=>notify('Microphone access was unavailable. You can type your message.');speech.start()};
 const logDrink=()=>{const menu=screen==='114:556';if(photo){notify('Choose a confirmed drink below before logging your photo.');return}const drink:Drink={name:menu?'Tropical Citrus':'Old Fashioned',abv:menu?0:35,sugar:menu?15:8,calories:menu?200:170,image:menu?'224c9.png':'f195d.png',time:new Date().toISOString()};setDrinks(old=>[...old,drink]);navigate('178:3710');notify(drink.name+' added to your drink history.');};
 const beforeNav=(id:string)=>{
  if(id==='164:1801')setPlan(p=>({...p,who:'Just Me'}));
  if(['173:980','175:2351','175:2579'].includes(id))setPlan(p=>({...p,occasion:id==='173:980'?'Casual':id==='175:2351'?'Work':'Social'}));
  if(id==='175:1152')setSelectedFood('Balanced Meal');if(id==='175:1219')setSelectedFood('Avocado & Egg Toast');if(id==='175:1286')setSelectedFood('Mixed Nut');if(id==='175:1355')setSelectedFood('Avocado & Egg Toast');
  navigate(id,homeStates.includes(screen)&&homeStates.includes(id));
 };
 const bind=(p:NodeProps):Binding=>{
  const id=p['data-node-id']||'',name=p['data-name']||'',copy=textOf(p.children),leaf=typeof p.children==='string'?p.children.trim():'';
  const suffix=id.split(';').at(-1);const b:Binding={};
  // Recorded Figma actions always take priority over inferred control behavior.
  const link=prototype.links.find(l=>l.root===screen&&l.id===id);
  if(link)b.action=()=>{if(link.navigation==='SCROLL_TO'){navigate('175:1286');return}beforeNav(link.to)};
  // The tab bar instances share these component layer suffixes across frames.
  if(suffix==='131:683')b.action=()=>navigate(HOME);
  if(suffix==='131:837')b.action=()=>navigate('35:189');
  if(suffix==='131:914')b.action=()=>navigate('28:672');
  if(suffix==='182:4523')b.action=()=>navigate('87:218');
  if(suffix==='199:2023')b.action=()=>{setPhoto('');navigate('73:363')};
  if(name==='back'&&!b.action)b.action=()=>navigate(HOME);
  if(name==='Home- Daily Overview'&&!b.action)b.action=()=>navigate('200:3516');
  if(name==='Home- Reminder-time')b.action=()=>navigate('151:654');
  if(name==='Home- Reminder-eat'&&!b.action)b.action=()=>navigate('151:902');
  if(name==='Home- Reminder-water'&&!b.action)b.action=()=>navigate('175:1424');
  if(name==='Component 6'&&!b.action)b.action=()=>navigate('131:1030');
  if(name==='avatar'&&homeStates.includes(screen))b.action=()=>navigate('28:672');
  const definition=fieldDefinitions[id];
  if(definition){b.control={...definition,value:prefs[definition.key]||'',onChange:value=>setPrefs(old=>({...old,[definition.key]:value}))};b.label=definition.key;}
  if(id==='48:402')b.action=()=>notify('Preferences saved on this device.');
  if(id==='131:1042')b.action=()=>{navigate(HOME);notify('Your settings have been saved.')};
  if(name==='Situation- Just Me'&&!b.action)b.action=()=>beforeNav('164:1801');
  if(name==='Situation- With Others'&&homeStates.includes(screen)){b.action=()=>setPlan(old=>({...old,who:'With Others'}));b.selected=plan.who==='With Others';}
  if(name==='Situation- Casual'&&!b.action)b.action=()=>beforeNav('173:980');
  if(name==='Situation- Work'&&homeStates.includes(screen)&&!b.action)b.action=()=>beforeNav('175:2351');
  if(name.trim()==='Situatiobn- Social'&&homeStates.includes(screen)&&!b.action)b.action=()=>beforeNav('175:2579');
  if(name==='Button- Next'&&copy==='Next'&&homeStates.includes(screen)&&!b.action)b.action=()=>plan.occasion?navigate('175:2693'):notify('Choose your occasion to continue.');
  // Daily figures retain the Figma sample until the user logs a real entry.
  if(drinks.length&&leaf){const total=drinks.reduce((s,d)=>s+d.calories,0),sugar=drinks.reduce((s,d)=>s+d.sugar,0),abv=drinks.at(-1)?.abv||0;if(leaf==='240/ 600 kcal')b.text=`${total}/ 600 kcal`;if(leaf==='18/ 50 g')b.text=`${sugar}/ 50 g`;if(leaf==='5/20 ABV')b.text=`${abv}/20 ABV`;if(leaf==='Illustrative data')b.text='Your logged drinks';}
  if(homeStates.includes(screen)&&plan.who==='With Others'&&leaf==='Just Me/Casual')b.text=`With Others/${plan.occasion||'Casual'}`;
  if((screen==='200:3601')&&copy==='Weekly'&&name==='Location Tap-selected')b.action=()=>navigate('200:3516');
  if(screen==='151:654'){
   if(id==='I151:786;147:759')b.control={type:'time',value:lastDrink,placeholder:'Time',onChange:setLastDrink};
   if(id==='I151:786;147:765')b.control={value:interval,options:['1 minute','5 minutes','15 minutes','20 minutes','30 minutes','60 minutes'],onChange:v=>{setIntervalValue(v);setTime({remaining:parseInt(v)*60,endsAt:null})}};
   if(id==='I151:786;151:622')b.style={left:0,right:0,textAlign:'center',whiteSpace:'nowrap'};
   if(id==='I151:786;151:621'){b.style={whiteSpace:'nowrap',left:'28.81%',right:'28.81%',textAlign:'center'};b.text=String(Math.floor(time.remaining/60)).padStart(2,'0')+':'+String(time.remaining%60).padStart(2,'0');}
   if(id==='I151:786;151:809')b.action=()=>setTime(old=>({...old,endsAt:Date.now()+(old.remaining||parseInt(interval)*60)*1000}));
   if(id==='I151:786;151:624')b.action=()=>setTime(old=>({...old,endsAt:null}));
  }
  if(id==='I175:2312;175:1653')b.hide=true;
  if(screen==='175:1424'){
   if(id==='I175:2312;175:1659')b.control={value:waterGoal,placeholder:'Amount',options:['125 ml','250 ml','500 ml'],onChange:v=>{setWaterGoal(v);setWater(Math.min(250,parseInt(v)))}};
   if(id==='I175:2312;175:1663')b.control={value:interval,options:['1 minute','5 minutes','15 minutes','30 minutes','60 minutes'],onChange:v=>{setIntervalValue(v);setWaterTime({remaining:parseInt(v)*60,endsAt:null})}};
   if(id==='I175:2312;175:1669')b.action=()=>{setWaterTotal(n=>n+water);setWaterTime({remaining:parseInt(interval)*60,endsAt:Date.now()+parseInt(interval)*60000});notify(`${water} ml logged. Water check-in started.`)};
   if(id==='I175:2312;175:1667')b.action=()=>{setWaterTime(t=>({...t,endsAt:null}));notify('Water check-in paused.')};
  }
  if(foodStates.includes(screen)){
   const before=screen==='151:902'||screen==='175:1152'||screen==='175:1219';
   if(name==='Food card'){b.action=()=>beforeNav(before?(copy.includes('Balanced Meal')?'175:1152':'175:1219'):(copy.includes('Mixed Nut')?'175:1286':'175:1355'));b.label='Select '+(copy.includes('Balanced Meal')?'Balanced Meal':copy.includes('Mixed Nut')?'Mixed Nut':'Avocado & Egg Toast');}
   if((name==='Button- Next'&&copy==='Select')&&!b.action)b.action=()=>{if(!selectedFood){notify('Select a food option first.');return}navigate('178:3710');notify(selectedFood+' selected.')};
   if(copy==='Before drink'&&name==='Situation- Work'&&!b.action)b.action=()=>navigate('151:902');
   if(copy==='While Drinking'&&name.trim()==='Situatiobn- Social'&&!b.action)b.action=()=>navigate('151:1122');
  }
  if(screen==='175:2693'){
   if(['178:3315','178:3330','178:3350','178:3368','178:3386'].includes(id)){const choices:Record<string,string>={'178:3315':'Citrus Sparkler','178:3330':'Cucumber Mint Fizz','178:3350':'Low-Alcohol Mojito','178:3368':'White Wine Spritzer','178:3386':'Gin & tonic'};b.action=()=>setSelectedDrink(choices[id]);b.selected=selectedDrink===choices[id];b.label='Select '+choices[id];}
   if(name==='Button- Next'&&copy==='Select')b.action=()=>{setSelectedDrink(selectedDrink||'Low-Alcohol Mojito');navigate('178:3710')};
   if(name==='Situation- Work'&&copy==='Home')b.action=()=>navigate('175:2693');
  }
  if(screen==='178:3399'&&name==='Situation- Work'&&copy==='Home')b.action=()=>navigate('175:2693');
  if(screen==='73:363'||screen==='114:556'){
   if(id==='73:632'||id==='114:603')b.action=logDrink;
   if(name==='camera-card'){b.action=()=>uploadRef.current?.click();b.label='Choose a drink or menu photo';}
   if(p.src&&/f195d|224c9/.test(p.src||'')&&photo)b.src=photo;
   if(photo&&leaf==='Possible Match')b.text='Your photo';
   if(photo&&(leaf==='Old Fashioned'||leaf==='Menu'))b.text='Confirm drink';
   if(photo&&leaf==='Sample estimate — confirm the recipe.')b.text='Photo selected. Enter confirmed drink details below.';
   if(photo&&name==='nutrition-panel')b.hide=true;
   if(photo&&name==='camera-feature')b.extra=<div className="photo-entry"><label>Drink name<input id="drink-name" placeholder="Drink name"/></label><div><label>ABV %<input id="drink-abv" type="number" min="0" max="100" defaultValue="0"/></label><label>Sugar g<input id="drink-sugar" type="number" min="0" defaultValue="0"/></label><label>kcal<input id="drink-kcal" type="number" min="0" defaultValue="0"/></label></div></div>;
   if(photo&&(id==='73:632'||id==='114:603'))b.action=()=>{const val=(id:string)=>(document.getElementById(id) as HTMLInputElement)?.value||'';if(!val('drink-name').trim()){notify('Enter the drink name to confirm your photo.');return}const abv=Number(val('drink-abv')),sugar=Number(val('drink-sugar')),calories=Number(val('drink-kcal'));if(!Number.isFinite(abv)||abv<0||abv>100||sugar<0||calories<0){notify('Enter valid drink values.');return}setDrinks(old=>[...old,{name:val('drink-name').trim(),abv,sugar,calories,image:photo,time:new Date().toISOString()}]);navigate('178:3710');notify('Drink added to your history.');};
  }
  if(['35:189','211:2116','73:196'].includes(screen)){
   if(name==='Favorite heart'){const card=id.split(';').at(-1)||id;b.action=()=>toggleFavorite(card);b.selected=favorites.includes(card);b.label='Toggle favourite';}
   if(name==='AI Chat Box'&&!b.action)b.action=()=>navigate('87:218');
   if(screen==='35:189'&&galleryRecipes[name]){const recipe=galleryRecipes[name];b.flipContent=<GalleryRecipeFace recipe={recipe}/>;b.flipped=flippedCard===name;b.label=`${recipe.name}: ${b.flipped?'show photo':'show recipe details'}`;b.action=()=>setFlippedCard(current=>current===name?null:name);}
   if(name==='header')b.action=undefined;
   if(name==='gallery-grid'&&drinks.length)b.extra=<div className="logged-drinks"><h2>Your logged drinks</h2>{drinks.map((d,i)=><article key={d.time+i}><img src={d.image.startsWith('data:')?d.image:'/assets/'+d.image} alt={d.name}/><div><b>{d.name}</b><p>{new Date(d.time).toLocaleDateString()} · {d.calories} kcal · {d.abv}% ABV · {d.sugar}g sugar</p><button onClick={()=>setDrinks(old=>old.filter((_,index)=>index!==i))}>Remove</button></div></article>)}</div>;
  }
  if(screen==='87:218'){
   if(name==='input-field')b.text=<input className="chat-input" placeholder="What would you like to know?" aria-label="Chat message" value={chatInput} onChange={e=>setChatInput(e.target.value)} onKeyDown={e=>{if(e.key==='Enter')send(chatInput)}}/>;
   if(name==='send-button')b.action=()=>send(chatInput);
   if(name==='attachment-button')b.action=()=>uploadRef.current?.click();
   if(name==='mic-button')b.action=mic;
   if(name==='conversation-area'&&chat.length)b.extra=<div className="local-messages">{chatAttachment&&<img className="chat-photo" src={chatAttachment} alt="Attached drink"/>}{chat.map((m,i)=><p className={'message '+m.role} key={i}>{m.text}</p>)}</div>;
   if(name==='suggestion-card')b.action=()=>send(copy.includes('Swap')?'How can I swap vermouth in a Negroni?':'What happens when I add soda?');
  }
  if(screen==='178:3710'){
   const chosen=drinks.at(-1);
   const options:Record<string,{image:string;abv:string;sugar:string;calories:string}>={'White Wine Spritzer':{image:'3a65d.png',abv:'4–6%',sugar:'1–3g',calories:'55–75kcal'},'Low-Alcohol Mojito':{image:'1db3a.png',abv:'3–5%',sugar:'10g',calories:'90–140kcal'},'Citrus Sparkler':{image:'c5060.png',abv:'0%',sugar:'8g',calories:'40–80kcal'},'Cucumber Mint Fizz':{image:'a093b.png',abv:'5%',sugar:'2g',calories:'20–30kcal'},'Gin & tonic':{image:'171d6.png',abv:'5%',sugar:'2g',calories:'50–70kcal'}};
   const option=chosen?{image:chosen.image,abv:chosen.abv+'%',sugar:chosen.sugar+'g',calories:chosen.calories+'kcal'}:options[selectedDrink];
   if(option){if(id==='178:3982')b.text=chosen?.name||selectedDrink;if(id==='178:3986')b.text=option.abv;if(id==='178:3989')b.text=option.sugar;if(id==='178:3992')b.text=option.calories;if(p.src==='/assets/1db3a.png')b.src=option.image.startsWith('data:')?option.image:'/assets/'+option.image;}

   if(name==='Home- Reminder-time')b.action=()=>navigate('151:654');
   if(copy.startsWith('Time for a Bite')&&name.includes('Reminder'))b.action=()=>navigate('151:902');
   if(copy.startsWith('Water Break')&&name.includes('Reminder'))b.action=()=>navigate('175:1424');
  }
  return b;
 };
 const current=screens[screen],Screen=current.Component;const headerHeight=homeStates.includes(screen)?187:screen==='87:218'?130:62;
 return <div className="app-viewport" ref={shell}>
  <DesignContext.Provider value={{bind,footer,header,send,upload:()=>uploadRef.current?.click(),mic,water,setWater}}>
   <div ref={setHeader} className="header-host" style={{height:headerHeight,zoom:scale}}/>
   {screen==='87:218'&&header&&createPortal(<button className="chat-back" aria-label="Close chat and return Home" onClick={()=>navigate('131:1295')}><X size={18}/></button>,header)}
   <div className="screen-scroll" ref={scroller} style={{top:headerHeight*scale}}><div className="canvas-size" style={{width:402,height:current.height+(drinks.length&&['35:189','211:2116'].includes(screen)?drinks.length*115+60:0),zoom:scale,marginTop:-headerHeight}} key={screen}><Screen/></div></div>
   <div ref={setFooter} className="nav-host" style={{zoom:scale}}/>
   <input ref={uploadRef} hidden type="file" accept="image/*" capture="environment" onChange={e=>{const file=e.target.files?.[0];if(!file)return;if(file.size>8*1024*1024){notify('Choose an image smaller than 8 MB.');return}const reader=new FileReader();reader.onload=()=>{if(screen==='87:218'||['35:189','211:2116'].includes(screen)){setChatAttachment(String(reader.result));navigate('87:218')}else setPhoto(String(reader.result))};reader.readAsDataURL(file);e.target.value=''}}/>
  </DesignContext.Provider>
  {toast&&<div className="toast" role="status">{toast}</div>}
 </div>
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
