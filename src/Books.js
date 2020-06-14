import React, { Component } from "react";
 import ReadingImg from "./reading.jpg";
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>Books I Like</h2>

        <p>{"\“"}There are books which we read early in life, which sink into our consciousness and seem to disappear without leaving a trace. And then one day we find, in some summing-up of our life and put attitudes towards experience, that their influence has been enormous.”<br/>&mdash;Anais Nin</p>

        <img src={ReadingImg} />

        <p>I try to read a book a week, though I have been averaging more. Please follow me on <a href={"https://www.goodreads.com/review/list/78061282-ralph"}>Goodreads</a> for the most comprehensive list.</p>


        <hr/>

        <p>Here are some texts I am currently reading:</p>

        <p>Donella H. Meadows, <em>Thinking in Systems: A Primer</em></p>

        <p>Jean-Paul Sartre, <em>Existenialsm is a Humanism</em></p>

        <p>Seneca, <em>Letters from a Stoic</em></p>

        <hr/>


        <p>Here are some books I have enjoyed. This list is under construction.</p>

        <p>Political theory:</p>

        <p>Vladimir Lenin, <em>Imperialism: The Highest Stage of Capitalism</em></p>

        <p>Karl Marx, <em>Das Kapital</em></p>

        <hr/>
        <p>Classics:</p>

        <p>Milan Kundera, <em>The Unbearable Lightness of Being</em></p>

        <p>Oscar Wilde, <em>The Soul of Man Under Socialism</em></p>

        <hr/>

        <p>Fiction:</p>

        <p>Ottessa Moshfegh, <em>My Year of Rest and Relaxation</em></p>

        <p>Haruki Murakami, <em>Norwegian Wood</em></p>

        <p>Adelle Waldman, <em>The Love Affairs of Nathaniel P.</em></p>

        <hr/>

        <p>Philosophy:</p>

        <p>Marcus Aurelius, <em>Meditations</em></p>

        <p>Epictetus, <em>The Art of Living: The Classical Manual on Virtue, Happiness, and Effectiveness</em></p>

        <p>Bertrand Russell, <em>The Conquest of Happiness</em></p>

        <p>Noam Chomsky, <em>The Responsibility of Intellectuals</em></p>

        <p>Leonard Koren, <em>Wabi-Sabi for Artists, Designers, Poets & Philosophers</em></p>

        <p>Robert Pirsig, <em>Zen and the Art of Motorcycle Maintenance: An Inquiry into Values</em></p>

        <p>William Irvine, <em>A Guide to the Good Life: The Ancient Art of Stoic Joy</em></p>
        
        <hr/>

        <p>Psychology:</p>

        <p>Victor Frankl, <em>Man's Search for Meaning</em></p>

        <p>Sigmund Freud, <em>Civilization and Its Discontents</em></p>

        <p>Carl Jung, <em>Modern Man in Search of a Soul</em></p>

        <p>Gary Klein, <em>Sources of Power: How People Make Decisions</em></p>


        <p>Stephen Grosz, <em>The Examined Life: How We Lose and Find Ourselves</em></p>

        <hr/>

        <p>Sociology:</p>

        <p>Alfred Lubrano, <em>Limbo: Blue-Collar Roots, White-Collar Dreams</em></p>

        <hr/>

        <p>Biography</p>

        <p>Richard Feynman, <em>Surely You're Joking, Mr. Feynman!: Adventures of a Curious Character</em></p>

        <p>Edward Snowden, <em>Permanent Record</em></p>

        <hr/>

        <p>Sports and nutrition:</p>
        
        <p>Christopher McDougall, <em>{"Born to Run: A Hidden Tribe, Superathletes, and the Greatest Race the World Has Never Seen"}</em></p>

        <p>Don Fink, <em>Be Iron Fit: Time-Efficient Training Secrets for Ultimate Fitness</em></p>

        <hr/>

        <p>Travel:</p>

        <p>Rolf Potts, <em>Vagabonding: An Uncommon Guide to the Art of Long-Term World Travel</em></p>

        <hr/>

        <p>Technology:</p>

        <p>Camille Fournier, <em>The Manager's Path: A Guide for Tech Leaders Navigating Growth and Change</em></p>

        <p>Paul Graham, <em>Hackers and Painters: Big Ideas from the Computer Age</em></p>

        <p>Martin Kleppmann, <em>Designing Data-Intensive Applications</em></p>


      </div>
    );
  }
}
 
export default Stuff;