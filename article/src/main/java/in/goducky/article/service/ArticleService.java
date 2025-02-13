package in.goducky.article.service;

import in.goducky.article.model.Article;
import in.goducky.article.repository.ArticleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleService {
    ArticleRepository articleRepository;

    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public List<Article> findAll() {
        return articleRepository.findAll();
    }

    public void createArticle(Article article) {
        articleRepository.save(article);
    }
}
