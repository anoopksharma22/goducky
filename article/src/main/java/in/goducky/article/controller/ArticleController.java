package in.goducky.article.controller;

import in.goducky.article.dtos.AllArticlesDto;
import in.goducky.article.dtos.OneArticlesDto;
import in.goducky.article.model.Article;
import in.goducky.article.service.ArticleService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/articles")
@CrossOrigin
public class ArticleController {
    ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @GetMapping("")
    public List<AllArticlesDto> fetchAllArticles() {
        return articleService.findAll();
    }

    @GetMapping("/{id}")
    public OneArticlesDto fetchAllArticles(@PathVariable int id) {
        return articleService.findById(id);
    }

    @GetMapping("/parsed/{id}")
    public String fetchArticleById(@PathVariable int id) {
        return articleService.findByIdParsed(id);
    }

    @PostMapping("")
    public void createArticle(@RequestBody Article article) {
        System.out.println(article);
        articleService.createArticle(article);
    }

    @PostMapping("/parse")
    public String fetchDummyArticles(@RequestBody String md) {
        return articleService.parseMd(md);
    }

}
