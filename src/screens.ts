import type {ComponentType} from "react";
import Screen0 from "./design/home";
import Screen1 from "./design/homesetting";
import Screen2 from "./design/data";
import Screen3 from "./design/month";
import Screen4 from "./design/gallery";
import Screen5 from "./design/galleryflip";
import Screen6 from "./design/detail";
import Screen7 from "./design/chatfull";
import Screen8 from "./design/profile";
import Screen9 from "./design/recommend";
import Screen10 from "./design/homejust";
import Screen11 from "./design/homecasual";
import Screen12 from "./design/homework";
import Screen13 from "./design/homesocial";
import Screen14 from "./design/time";
import Screen15 from "./design/food";
import Screen16 from "./design/food2";
import Screen17 from "./design/food1";
import Screen18 from "./design/foodwhile";
import Screen19 from "./design/while1";
import Screen20 from "./design/while2";
import Screen21 from "./design/water";
import Screen22 from "./design/plan";
import Screen23 from "./design/planbar";
import Screen24 from "./design/scan";
import Screen25 from "./design/scanmenu";
export const screens:Record<string,{Component:ComponentType;height:number;name:string}>={
"131:1295":{Component:Screen0,height:1366,name:"Home-1"},
"131:1030":{Component:Screen1,height:874,name:"Home setting-1"},
"200:3516":{Component:Screen2,height:1022,name:"Home- Data- week"},
"200:3601":{Component:Screen3,height:1022,name:"Home- Data - Month"},
"35:189":{Component:Screen4,height:1672,name:"Gallery-1"},
"211:2116":{Component:Screen5,height:1672,name:"Gallery-1"},
"73:196":{Component:Screen6,height:1672,name:"Gallery1-1"},
"87:218":{Component:Screen7,height:865,name:"Chat"},
"28:672":{Component:Screen8,height:1616,name:"setting-1"},
"178:3710":{Component:Screen9,height:1163,name:"Home-1- Recommendation"},
"164:1801":{Component:Screen10,height:1312,name:"Home-1-setting-1"},
"173:980":{Component:Screen11,height:1312,name:"Home-1"},
"175:2351":{Component:Screen12,height:1312,name:"Home-1"},
"175:2579":{Component:Screen13,height:1312,name:"Home-1"},
"151:654":{Component:Screen14,height:876,name:"Home-1-1 Reminder -Time"},
"151:902":{Component:Screen15,height:876,name:"Home-1-2 Reminder-food1"},
"175:1219":{Component:Screen16,height:876,name:"Home-1-2 Reminder-food- selection 2"},
"175:1152":{Component:Screen17,height:876,name:"Home-1-2 Reminder-food- selection 1"},
"151:1122":{Component:Screen18,height:876,name:"Home-1-2 Reminder-food 2"},
"175:1286":{Component:Screen19,height:876,name:"Home-1-1 Reminder-food 2 -selection 1"},
"175:1355":{Component:Screen20,height:876,name:"Home-1-2 Reminder-food 2- selection 2"},
"175:1424":{Component:Screen21,height:876,name:"Home-1-2 Reminder-water"},
"175:2693":{Component:Screen22,height:1191,name:"Home-1-3 Today-Just Me + Social- Home"},
"178:3399":{Component:Screen23,height:1191,name:"Home-1-3 Today-Just Me + Social- Home"},
"73:363":{Component:Screen24,height:881,name:"Home-Scan Drink"},
"114:556":{Component:Screen25,height:880,name:"Home-Scan Menu"},
};
