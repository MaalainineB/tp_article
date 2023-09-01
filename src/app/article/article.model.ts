export class Article {

    title: string
    votes: number
    link: string
    id: number=0

    constructor(title: string, link: string, votes?: number) {
        this.title = title
        this.link = link
        this.votes = votes || 0
    }

    voteUp() : void {
        this.votes++
        console.log(`${this.title}: ${this.votes}`)
    }
  
    voteDown() {
        this.votes--
        console.log(`${this.title}: ${this.votes}`)
        return false
    }

}
