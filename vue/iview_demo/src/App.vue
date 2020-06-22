<template>
  <div id="app"  class="layout">
      <Layout>
          <Header></Header>
          <Layout>
              <Left></Left>
              <Layout :style="{position:'absolute',left: '200px',width:'89vw'}">
                <Content :style="{padding: '0 16px 16px'}">
                    <Breadcrumb :style="{margin: '16px 0'}">
                        <BreadcrumbItem to="/about">内容管理</BreadcrumbItem>
                        <BreadcrumbItem to="/">文章管理</BreadcrumbItem>
                    </Breadcrumb>
                    <Card>
                        <router-view />
                    </Card>
                </Content>
            </Layout>
          </Layout>
      </Layout>
  </div>
</template>
<script>
  import Header from './components/Header'; 
  import Left from './components/Left';  
  export default {
    components: {
      Header,
      Left
    },
  };
 
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    left:-1px;
    border-radius: 4px;
    overflow: hidden;
}
</style>
