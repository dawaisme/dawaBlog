package com.dawa.blog.utils;

import org.apache.commons.dbcp.BasicDataSourceFactory;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Properties;

/**
 * @author 尚轶锋
 *
 * JDBC 公用类
 */
public class DBUtils {
    //属性
    public static DataSource dataSource;
    private static Properties properties = new Properties();
    private static PreparedStatement pstmt;

    //线程ThreadLocal类对象
    private static final ThreadLocal<Connection> connholder = new ThreadLocal<Connection>();

    //静态加载配置文件
    static{
        try {
            //加载到properties
            properties.load(DBUtils.class.getClassLoader().getResourceAsStream("jdbc.properties"));
            //生成DataSource对象
            dataSource = BasicDataSourceFactory.createDataSource(properties);
        }catch (Exception e) {
            e.printStackTrace();
        }
    }

    //使用JNDI的获取数据源的方式
    /*static {
        try {
            Context ic = new InitialContext();
            dataSource = (DataSource) ic.lookup("java:comp/env/jdbc/dawaBlog");
        } catch (NamingException e) {
            e.printStackTrace();
        }
    }*/

    //得到连接对象方法
    public static Connection getConn(){
        //先从当前线程中获取连接对象
        Connection conn = connholder.get();
        try {
            if (conn==null || conn.isClosed()){ //如果线程中还未有连接对象,则从连接池中get一个
                try {
                    conn = dataSource.getConnection();
                    connholder.set(conn);
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return conn;
    }

    //增删改 公用底层Demo方法
    public static int myExecuteUpdate(String sql,Object...objects) throws SQLException {
        int num = 0;
        //得到pstmt对象
        pstmt = getConn().prepareStatement(sql);
        //给SQL语句中的参数赋值
        if (objects!=null){
            for (int i = 0; i < objects.length; i++) {
                pstmt.setObject(i+1,objects[i]);
            }
        }
        //执行pstmt语句

        return pstmt.executeUpdate();
    }

    //查 公用底层demo方法
    public static ResultSet myExecuteQuery(String sql,Object...objects) {
        try {
            //得到pstmt对象
            pstmt = getConn().prepareStatement(sql);
            //给SQL语句中的参数赋值
            if (objects!=null){
                for (int i = 0; i < objects.length; i++) {
                    pstmt.setObject(i+1,objects[i]);
                }
            }
            //执行pstmt语句
            return pstmt.executeQuery();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    //开启事务  即:设置为非自动提交
    public static void startTransaction(){
        try {
            getConn().setAutoCommit(false);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    //commit  提交
    public static void commit(){
        try {
            getConn().commit();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    //回滚 rollback
    public static void rollback(){
        try {
            getConn().rollback();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    //结束事务 即:即:设置为自动提交
    public static void endTransaction(){
        try {
            getConn().setAutoCommit(true);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    //释放资源
    public static void release(){
        try {
            getConn().close(); //连接对象放回连接池
            connholder.remove();//与线程池有关,解除关系
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

}
