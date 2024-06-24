import './Main.css';
import { useState, useEffect } from 'react';
import IMG from './img/img.js';
import Clue from './document.json';


import Confetti from 'react-confetti';

const Main =()=>{
    let creepyAudio = new Audio('https://www.myinstants.com/media//sounds/re-zero-kara-hajimeru-isekai-seikatsu-creepy-sound_FaUBaJ6.mp3');

    function wrongSound ()  {
      new Audio('https://www.myinstants.com/media/sounds/wrong.mp3').play();
    };
    function rightSound ()  {
      new Audio('https://www.myinstants.com/media/sounds/generic-ka-ching.mp3').play();
    };


    const cat = ['Hair','Eyes','Shirt','Other'];
    const [categ, setCat] =useState([]);
    const [selectedCat, setSelectedCat] = useState(null); 
  
  
    const [tone, setHairColor] = useState('black');
  
    const [eyes, setEyes] = useState('white');
  
    const [shirtValue, setShirt] = useState('yellow');
    const [shirtImage, setShirtImage] = useState(null);
  
    const [folder, setFolder] = useState(IMG.folder);
  
    const [selectedValues, setSelectedValues] = useState({
      hair: '',
      eyes: '',
      shirt: ''
    });
  
    useEffect(() => {
        getRandomDoc();
    }, []);
    
    const [clues, setClues] = useState([...Clue]);
  
  
    let [Case, setCase] = useState(0);
    let [Lives, setLives] = useState(3);
    let myHp = document.querySelector('.hp');
  
    const [showConfetti, setShowConfetti] = useState(false);
    
   
    const folderClick = () => {
      setFolder(prevSrc => prevSrc === IMG.folder ? IMG.ofolder : IMG.folder);
    };
  
    let docBox = document.querySelector('.docBox'); 
    const [selectedPaper, setSelectedPaper] = useState(null);
    const paperClick = (event) => {
      if (selectedPaper) { // If a paper is currently selected
        selectedPaper.style.borderColor = 'transparent';}
      // If the clicked paper is the currently selected one
      if (selectedPaper === event.target) {      // Unselect it
        setSelectedPaper(null);
      } else {
        event.target.style.borderColor = 'white';
        setSelectedPaper(event.target);
      }
     
      docBox.style.display = docBox.style.display === 'flex'?  'none': 'flex';
      console.log('paperClick');
    }//'flex'?  'none': 'flex'
  
    const [gameOverText, setGameOverText] = useState('');
    const [isBMode, setIsBMode] = useState(false);
    const bpaperClick =(event)=>
    {
        setIsBMode(true);
      document.querySelector('.warning').style.display ='flex';
      document.querySelector('body').style.backgroundImage = `url(${IMG.creepybg})`; 
  
      selectedPaper.style.display = 'none';
      event.target.style.borderColor = 'white';
      docBox.style.backgroundImage= `url(${IMG.bloodbg})`;
      docBox.style.objectFit= 'cover';

      let quest = document.querySelector('.quest');
      let title = quest.querySelector('h3');
      let content = quest.querySelector('div');
      title.textContent ="Title: The Alien Experiment\n";
      content.textContent = "\n A classified document detailing a secret government project involving *xxxx creatures* from void. This creature, described as having bloody red eyes and the ability to transform into human form, were subjects of covert experiments. However, something went horribly wrong. The creatures escaped, causing a *massive massacre*. The document contains chilling accounts of the incident, with descriptions of the creatures' terrifying powers and the destruction they caused. The final line reads: \"The experiment was a mistake. We've unleashed a horror we cannot contain.\"";
      content.style.textShadow =' 2px 5px 5px red';
      content.style.color ='red';
      creepyAudio.loop= true;
      creepyAudio.play();

      
      
      
  
    }
  
    
  
    const [randomDoc, setRandomDoc] = useState('');
  
    const getRandomDoc = () => {
      if (clues.length > 0) {
      const randomIndex = Math.floor(Math.random() * clues.length);
      setRandomDoc(clues[randomIndex]);
      //The same element will not be selected again.
      setClues(prevClues => prevClues.filter((_, index) => index !== randomIndex));}
      else
      {
        console.log('You Win!')
      }
    };
    
    
    
    const [Kname, setName]= useState('');
    const handleChange = (event) => {
        setName(event.target.value);
      }

    return(
      <>
        <div className='warning'>ᛁ ᛏᛟᛚᛞ ᚢ ᚾᛟᛏ ᛏᛟ ᛟᛈᛖᚾ ᛗᛁ ᛞᛟᚲᚢᛗᛖᚾᛏ</div>
        <div className='gameOver'> 
          <div><h1>GAME OVER</h1></div>
          <p>Completed Case: {Case}</p>
          <p>{gameOverText}</p>
          <div><button onClick={() => window.location.reload(false)}>Restart</button></div>
        </div>
        <div className='victory'>
          <Confetti/>
          <div className='scoreBoard'>
            <div><h1>Congratulation</h1></div>
             <p> Dear,</p>
             <p> 
              You have successfully solved the majority of our cases to date. Throughout these challenging missions, you may have gained insights and skills that you might not even be aware of. We are delighted to officially recognize you as our "Super Detector".
             </p>
             <p> Farewell,</p>
             <p>Dr. D</p>
            <button onClick={() => window.location.reload(false)}>Restart</button>
          </div>
  
        </div>
        
  
        <div className='game'>
            <div className='customBox'>
                <div className='hp'> 
                <p>🟢 </p>
                <p>🟢 </p>
                <p>🟢 </p>
                </div>
        
                <div>
                <div > <input className='name' placeholder='Unknown' value={Kname} onChange={handleChange}></input> </div>
                <div className='avatar'>
                    <div className='head'>
                        <div className = 'hair' style={{
                            backgroundColor: tone,
                            borderLeftColor: tone,
                            borderRightColor: tone}}>
                                
                            <div  className='strand' style={{backgroundColor: tone}}></div>
                            <div  className='strand' style={{backgroundColor: tone}}></div>
                            <div  className='strand' style={{backgroundColor: tone}}></div>
        
                        </div>
                        
                        {typeof eyes === 'string' ? //if
                        <div> 
                            <div className = 'eyes' id='left-eye' style={{backgroundColor: eyes}}/>
                            <div className = 'eyes' id='right-eye' style={{backgroundColor: eyes}}/>
                        </div>:
                        //else
                            <img src={eyes.img} className='eyesType'  alt='EyesImg'/> 
                        }
                        <div className = 'mouth' />
                        
                    </div>
                    <div className='shirt'>
                    <img src={shirtImage} className='cloth' style={{opacity:'100%'}} alt=''/>
                        <div className='rightArm'></div>
                        <div className='leftArm'></div>
                    </div>
                </div>
                </div>
        
                <div >
                <div className='caseTrack'> Completed Case: {Case} </div>
                <div className='customType'>
                    { cat.map((categ, index)=>(
                        <div className={`cat ${selectedCat === index ? 'selected' : ''}`} 
                            key ={index}
                            onClick={() =>{ 
                            setCat(cat[index]);
                            setSelectedCat(index); 
                            }}>
                            {categ}
                        </div>
                    ))
                    }
                </div>
                
                <div className='pickArea'>
                    {
                    categ === cat[0]? <HairPick setHairColor={setHairColor}/>:
                    categ === cat[1]? <EyesPick setEyes={setEyes}/>: 
                    categ === cat[2] ? <ShirtPick setShirt={setShirt} setShirtImage={setShirtImage} /> : ''             
                    }
                </div>
                <div className='items' >
                <div>
                <button 
                    className='checkBtn' 
                    onClick={() => {
                        if(Kname==='Dr.D')
                        {
                            let vic = new Audio('https://www.myinstants.com/media/sounds/ff1_victory_fanfare_1.mp3')
                            vic.loop = true;
                            vic.play();
                            console.log('Well done!')
                            document.querySelector('.victory').style.display = 'flex';

                        }
                        if (isBMode) {
                          
                        // Code for bpaperclick mode
                        console.log('bMode!');
                        let end = document.querySelector('.gameOver')
                        end.style.display ='flex';
                        setGameOverText("Curiosity killed the cat! You are dead!");
                        creepyAudio.pause();
                        let audio = new Audio('https://www.myinstants.com/media/sounds/txururu.mp3')
                        audio.loop= true
                        audio.play();
                       
                        } 
                        else {
                        // Code for normal (paperclick) mode
                        console.log('Hair:',tone,' Eyes:', (typeof eyes === 'string' ? eyes : eyes.value),'Cloth:', shirtValue);
                        setSelectedValues({ hair: tone, eyes: (typeof eyes === 'string' ? eyes : eyes.value), shirt: shirtValue });

                        if (tone === randomDoc.hair && (typeof eyes === 'string' ? eyes : eyes.value)
                            === randomDoc.eyes && shirtValue === randomDoc.shirt) 
                        {
                            rightSound();
                            setCase(Case+1);
                            getRandomDoc();
                            setShowConfetti(true);
                            setTimeout(() => {
                            setShowConfetti(false);
                            }, 3000);

                            if (clues.length <= 0) {
                            document.querySelector('.victory').style.display = 'flex';
                            }             
                        }
                        else{
                            
                            
                          
                            document.querySelector('body').style.backgroundColor ='tomato'
                            setTimeout(() => {document.querySelector('body').style.backgroundColor = ''}, 500);
                            const child = myHp.querySelector(`:nth-child(${Lives})`);
                            child.style.filter = 'grayscale(100%)';
                            wrongSound();
                            setLives((Lives-1)<=1? 1: Lives-1);
                            if(Lives===1)
                            {
                              let audio = new Audio('https://www.myinstants.com/media/sounds/txururu.mp3')
                              audio.loop= true
                              audio.play();
                              document.querySelector('.gameOver').style.display ='flex';
                              setGameOverText(`You're fired!!! With great power comes great responsibility. Errors in your work have led to negative outcomes.`);          
                            }
                        }
                        }
                    }}
                    >
                    Check
                    </button>

                {showConfetti && <Confetti 
                confettiSource={{ x: 0, y: 0, w: window.innerWidth, h: 0 }}
                />}
        
                </div>
                    <div className='folder' style={{
                        width: folder=== IMG.ofolder ? '380px' : '50px'}}>
                        <div><img src={folder} 
                          onClick={() => {
                              folderClick();
                              new Audio('https://www.myinstants.com/media/sounds/page-flip-sound-effect.mp3').play();
                          }} 
                          alt=""  /></div>
                        <div>
                        
                        <img src={IMG.paper} onClick={paperClick} alt='' />
                        {Case%2 ===1? <img src={IMG.bpaper} onClick={bpaperClick}  alt='' />:''}
        
                        
                        </div>
                    </div>
        
                </div>
                </div>
            
            </div>
            
            <div className='docBox'>
                <div className='drop'></div>
                <div className='quest'>
                
                <h3>No Title</h3>
                <div>{( clues.length<=0)?' That\'s all!':randomDoc.desc}</div>
        
                </div>
            </div>
        </div>
      </>
    );
  }
  const HairPick =({ setHairColor })=>{
    const myColor = ['tomato', 'orange', 'gold', 'forestgreen',
     'royalblue', 'black', 'teal', 'pink', 'lightskyblue' ,'lightgreen',
     'white','darkgrey','purple', 'brown', 'transparent' ];
    const [selectedColorIndex, setSelectedColorIndex] = useState(null); 
  
    return (
      <div>
      {
        myColor.map((color, index)=>(
          <div className ='square' 
            style={{backgroundColor: color, 
              boxShadow: index === selectedColorIndex ? 
              '0 0 0 5px DarkGoldenRod inset ' : ' 0 0 0 5px rgb(183, 183, 183) inset'}} 
            key ={index}
            onClick={() =>{
              setSelectedColorIndex(index); 
              setHairColor(color);
              console.log('hair'+color)}}>
          </div>))}
     
          </div>
    )
  
  }
  const EyesPick = ({ setEyes }) => {
    const eyeType = [
      'black',
      'green',
      'CornflowerBlue',
      'red',
      'darkgray',
      { img: IMG.glasses, value: 'glasses' },
      { img: IMG.angry, value: 'angry' },
      { img: IMG.small, value: 'small' },
      { img: IMG.tired, value: 'tired' },
      { img: IMG.scar, value: 'scar' }
    ];
    const [selectedEyeColorIndex, setSelectedEyeColorIndex] = useState(null); 
  
    return (
      <div>
        {eyeType.map((type, index) => (
          <div className='square'
            key={index}
            onClick={() => {
              setSelectedEyeColorIndex(index);
              setEyes(type);
              console.log('EyeType:' + (typeof type === 'string' ? type : type.value));
            }}
            style={{
              backgroundColor: typeof type === 'string' ? type : 'white',
              boxShadow: index === selectedEyeColorIndex ? '0 0 0 5px DarkGoldenRod inset' : '0 0 0 5px rgb(183, 183, 183) inset'
            }}
          >
            {typeof type === 'string' ? <div /> : <img src={type.img} alt='' />}
          </div>
        ))}
      </div>
    );
  };
  
  
  
  const ShirtPick = ({ setShirt, setShirtImage }) => {
    const shirtType = [
      { image: IMG.raincoat, value: 'raincoat' },
      { image: IMG.suit, value: 'suit' },
      { image: IMG.hoodie, value: 'hoodie' },
      { image: IMG.apron, value: 'apron' },
      { image: IMG.scarf, value: 'scarf' },
      { image: IMG.whiteCoat, value: 'whiteCoat' },
      { image: IMG.uniform, value: 'uniform' },
      { image: IMG.safetyVest, value: 'safetyVest' }
    ];
  
    return (
      <div>
        {shirtType.map((cloth, index) => (
          <div className='square' key={index} onClick={() => {
            setShirt(cloth.value);
            setShirtImage(cloth.image);
          }}>
            <img src={cloth.image} alt={cloth.value} />
          </div>
        ))}
      </div>
    );
  };
  
  
  
  
  
  export default Main;
  
