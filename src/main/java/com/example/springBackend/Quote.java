package com.example.springBackend;

public class Quote {
    // member vairables
    private String content;
    private String author;

    // Constructor
    public Quote(String content, String author){
        this.content = content;
        this.author = author;
    }

    // member functions
    // content
    public String getContent(){
        return this.content;
    }
    public void setContent(String data){
        this.content = data;
    }
    // author
    public String getAuthor(){
        return this.author;
    }
    public void setAuthor(String author){
        this.author = author;
    }
    @Override
    public String toString(){
        return "Quote: " + this.content + " Author: "+ this.author;
    }
}
