import ScrollTextFast from './components/ScrollTextFast/ScrollTextFast';
import { useState } from 'react';
import './App.css';
import ScrollTextSlow from './components/ScrollTextSlow/SrollTextSlow';
import ScrollTextMedium from './components/ScrollTextMedium/SrollTextMedium';

function App() {

  const [text, setText] = useState("nothing");
  const handleClick = (event) => {
    setText(event.target.value);
  }

const scroll = [text, text, text, text]
const textList = scroll.map(text => <p><ScrollTextFast text={text}/></p>) 
  return (
    <div className="App">
              <p><ScrollTextSlow text="I hate the way I look
I hate myself

I don’t want to live

But my body tells me I have to

So I hate it. I hate my body. I can’t do this alone
My only hope is to be so buried

By the dread that seems to have engulfed me

The only rest in this life"/></p>
        <p><ScrollTextSlow text="I hate how I look.

I hate how I look.

I hate how I look.

I hate my body.

I don't know what I want.

I don't know what I want!

I don't know what I want!

I hate how I look. I don't want my body anymore"/></p>
      <p><ScrollTextMedium text="When will the anxiety stop?

I miss her with everything I have.

Every second of the day, I miss her, and at night, I have a hard time falling asleep without her in my arms."/></p>
        <p><ScrollTextFast text="Why do I enjoy hurting others?

Is it better to be miserable than to enjoy life?

A better question is Why do I enjoy being happy? Who even cares about others? It's pointless"/></p>
        <p><ScrollTextMedium text="I hate that I am scared to talk to people but I am.

I hate that my relationship with a very dear friend feels like it may never be the same again. I'
ve messed up and lost what we build together"/></p>
        <p><ScrollTextSlow text="Why is everyone else happier and having more fun than me? I never get invited anywhere or do anything anymore and the people I have tried to arrange things for have had me as a side item or all of us cancelling at the last minute"/></p>
        <p><ScrollTextSlow text="I'm not good enough I don't live the right way, I don't feel the right way, I don't look the right way. If I would have been born into the right family. I'm limited by my circumstances, but I can't let anyone think that I'm weak"/></p>
        <p><ScrollTextFast text="If I was born into the right family,

my life would be fantastic.

I don't think that I am someone I should be.

I don't think I am good enough, I don't think that I am someone I should be. I don't think that I am someone I should be."/></p>
        <p><ScrollTextSlow text="If I was born into the right family, When will the anxiety stop?

I miss her with everything I have.

I could be a successful lawyer,

a doctor, a politician, an engineer.

But I was born into the wrong family,
"/></p>
        <p><ScrollTextMedium text="I feel like nobody understands me and I always end up hurting them. And when I see them in pain, I smile a little bit.

I am sick of it and I know what my answer is but I need somebody to understand me."/></p>
        <p><ScrollTextSlow text="I am lost and directionless
In a world with no one left to lose

I feel that my lungs are crushed, and there’s no air to breathe

I’m circling, falling deeper into an endless pit of my own unique, despair"/></p>
        <p><ScrollTextMedium text="What do I do now?

What’s next?

I’m dying and I’ve never lived

But with every second that passes I feel less and less motivated. I've stopped caring about others but I've also stopped caring about myself"/></p>
        <p><ScrollTextSlow text="I can’t do this alone
My only hope is to be so buried

By the dread that seems to have engulfed me

The only rest in this life is when I'm away from myself. I can't trust anyone 
"/></p>
        <p><ScrollTextSlow text="I hate the way I look
I hate myself

I don’t want to live

But my body tells me I have to

So I hate it. I hate my body. I can’t do this alone
My only hope is to be so buried

By the dread that seems to have engulfed me

The only rest in this life"/></p>
        <p><ScrollTextSlow text="I hate how I look.

I hate how I look.

I hate how I look.

I hate my body.

I don't know what I want.

I don't know what I want!

I don't know what I want!

I hate how I look. I don't want my body anymore"/></p>
        <p><ScrollTextFast text="All I do is overthink things. I wish I wouldn't
Because I don't even know what I want!

I don't know what I want.

I don't know what I want!

I don't know what I want!"/></p>
        <p><ScrollTextFast text="I am an unattractive piece of shit, with scars and stretch marks that make me feel horrible about myself and basically, I feel trapped.

How did it get like this?

When did this happen to me?

I don't want to be this girl"/></p>
        <p><ScrollTextMedium text="When will the anxiety stop?

I miss her with everything I have.

Every second of the day, I miss her, and at night, I have a hard time falling asleep without her in my arms."/></p>
        <p><ScrollTextFast text="Why do I enjoy hurting others?

Is it better to be miserable than to enjoy life?

A better question is Why do I enjoy being happy? Who even cares about others? It's pointless"/></p>
        <p><ScrollTextMedium text="I hate that I am scared to talk to people but I am.

I hate that my relationship with a very dear friend feels like it may never be the same again. I'
ve messed up and lost what we build together"/></p>
        <p><ScrollTextSlow text="Why is everyone else happier and having more fun than me? I never get invited anywhere or do anything anymore and the people I have tried to arrange things for have had me as a side item or all of us cancelling at the last minute"/></p>
        <p><ScrollTextFast text="Should I kill myself?

I'm going to look in the mirror and I don't recognize myself.

What have I become?

I don't feel joy anymore.

I feel like a hollow shell.

This is the worse it's ever been."/></p>
        <p><ScrollTextMedium text="I'm losing my humanity.

I'm not going to make it to the finish line.

I'm gonna die at this rate.

I don't know why I keep trying.

I don't know why I should keep trying."/></p>
        <p><ScrollTextFast text="I'm scared to let others know how I truly feel.

But I'm so torn about it.
I want to put it out there.

But it never ends up coming out the way I had intended."/></p>
        <p><ScrollTextFast text="Its always all over the place, and I never know how to say what I want to say.

It always ends up feeling, well, wrong.

But then I feel like I've broken some kind of trust.

I'm not even sure how I should be feeling.
"/></p>
        <p><ScrollTextFast text="I want people to know my heart.

To know who I am.

I want them to know what its like to be me.

What I do and what I think.

I want them to understand who I am. I want people to know my heart.

To know who I am.

I want them to know what its like to be me.

What I do and what I think.

I want them to understand who I am."/></p>
        <p><ScrollTextMedium text="I am always alone in the dark in my room.

It has always been like that. I'm by myself on a random Tuesday night, and I have every reason to feel fine.

But it seems so easy, and not just to me
"/></p>
        <p><ScrollTextMedium text="The universe doesn't care about me. 

I'm working hard at being ok with that.

I have no intrinsic value or worth.

I've decided that

I know that sounds like a cop - out, but it's the best I can do right now."/></p>
        <p><ScrollTextSlow text="I wish that I was a reliable person that people could come to, but...

I'm not.

I am good to people when they are in a jam, but otherwise I get tired and stressed easily.

I need to work on that."/></p>
 <p><ScrollTextMedium text="What do I do now?

What’s next?

I’m dying and I’ve never lived

But with every second that passes I feel less and less motivated. I've stopped caring about others but I've also stopped caring about myself"/></p>
        <p><ScrollTextSlow text="I can’t do this alone
My only hope is to be so buried

By the dread that seems to have engulfed me

The only rest in this life is when I'm away from myself. I can't trust anyone 
"/></p>
      <div>
        <input className="input" onChange={handleClick} title="what are your insecurites?"></input>
      </div>
    </div>
  );
}

export default App;
