package com.dawa.blog.utils;

import java.util.ArrayList;
import java.util.List;

public class PageBean {
    private int currentPage = 1; //当前页,默认第一页
    private int allRows; //总行数
    private int totalPage;//总页数  - 下面 直接算出来
    private int pageSize =10; //每页显示的条数,默认为10条
    private List list = new ArrayList();  //每页要显示的数据

    public PageBean() {
    }

    public PageBean(int currentPage, int allRows, int totalPage, int pageSize, List list) {
        this.currentPage = currentPage;
        this.allRows = allRows;
        this.totalPage = totalPage;
        this.pageSize = pageSize;
        this.list = list;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }

    public int getAllRows() {
        return allRows;
    }

    public void setAllRows(int allRows) {
        this.allRows = allRows;
    }

    public int getTotalPage() {
        //算出总页数.
        return allRows % pageSize == 0 ? allRows / pageSize : allRows / pageSize + 1;
    }

    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public List getList() {
        return list;
    }

    public void setList(List list) {
        this.list = list;
    }
}
