<template>
  <div id="app"  class="layout">
      <Layout>
          <Header></Header>
          <Layout>
              <!-- <Sider :style="{position: 'fixed',height: '100vh', left: 0}"> -->
              <Sider :style="{position: 'fixed',height: '100vh'}">
                  <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                      <Submenu name="1">
                          <template slot="title">
                              <Icon type="ios-navigate"></Icon>
                              Item 1
                          </template>
                          <MenuItem name="1-1">Option 1</MenuItem>
                          <MenuItem name="1-2">Option 2</MenuItem>
                          <MenuItem name="1-3">Option 3</MenuItem>
                      </Submenu>
                      <Submenu name="2">
                          <template slot="title">
                              <Icon type="ios-keypad"></Icon>
                              Item 2
                          </template>
                          <MenuItem name="2-1">Option 1</MenuItem>
                          <MenuItem name="2-2">Option 2</MenuItem>
                      </Submenu>
                      <Submenu name="3">
                          <template slot="title">
                              <Icon type="ios-analytics"></Icon>
                              Item 3
                          </template>
                          <MenuItem name="3-1">Option 1</MenuItem>
                          <MenuItem name="3-2">Option 2</MenuItem>
                      </Submenu>
                  </Menu>
              </Sider>
              <Layout :style="{marginLeft: '200px'}">
                <Content :style="{padding: '0 16px 16px'}">
                    <Breadcrumb :style="{margin: '16px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Card>
                        <div style="height: 600px">Content</div>
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
    left:0;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
