package in.goducky.article.mappers;

import in.goducky.article.dtos.AllArticlesDto;
import in.goducky.article.dtos.OneArticlesDto;
import in.goducky.article.model.Article;

public class ArticleToOneArticlesDtoMapper {
    public static OneArticlesDto map(Article article) {
        OneArticlesDto dto = new OneArticlesDto();
        dto.setId(article.getId());
        dto.setTitle(article.getTitle());
        dto.setContent(article.getContent());
        dto.setAuthor(article.getAuthor());
        dto.setActive(article.isActive());
        return dto;
    }
}
