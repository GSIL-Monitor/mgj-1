'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

//配置接口
var express = require("express");
var app = express();
var minedata = require("../src/data/minedata.json");
var mfwyouji = require("../src/data/mfwyouji.json");
var shopList = require("../src/data/shoplist.json");
var shopcart = require("../src/data/shop_cart.json");
var shopdata = require("../src/data/shopdata.json");
var live = require("../src/data/live.json");
var info_list_show = require("../src/data/info_list_show.json");
var info_list_show_for = require("../src/data/info_list_show_for.json");
var store_choiceness = require("../src/data/store_choiceness");
var listdata =require("../src/data/listdata.json");
var shoplist =require("../src/data/shoplist.json");
var clothdetail =require("../src/data/clothdetail.json");
var ranking = require("../src/data/ranking.json");
var userInfo = require("../src/data/userInfo.json");
var Keep = require("../src/data/Keep.json");
var order = require("../src/data/order.json")
var order = require("../src/data/order.json")
var wear_effect = require("../src/data/wear-effect.json");
var Keep = require("../src/data/Keep.json");

var order = require("../src/data/order.json")
var wear_effect = require("../src/data/wear-effect.json");
var Keep = require("../src/data/Keep.json");

var apiRoutes = express.Router();
app.use("/api",apiRoutes);

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)



const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    before(app){
      app.get("/api/minedata",function(req,res){
        res.json({
          data:minedata
        });
      });
  
      //get存数据
      var info = app.get("/api/userinfo",function(req,res,next){
        return res.send(JSON.stringify({
          info:req.query.user && req.query.pwd=="123456"?"登录成功":"没有该账号",
          
        }));
        
      })
			app.get("/api/shopList",function(req,res){
				res.json({
						data:shopList
				})
			})
			app.get("/api/wear_effect",function(req,res){
				res.json({
						data:wear_effect
				})
			})
			app.get("/api/mfwyouji",function(req,res){
				res.json({
						data:mfwyouji
				})
			})
      app.get("/api/ranking",function(req,res){
        res.json({
            data:ranking
        })
      })
      app.get("/api/userInfo",function(req,res){
        res.json({
            data:userInfo
        })
      })
      app.get("/api/Keep",function(req,res){
        res.json({
            data:Keep
        })
      })
			app.get("/api/shopdata",function(req,res){
				res.json({
					data:shopdata
				});
			});
			app.get("/api/listdata",function(req,res){
				res.json({
					dataInfo:listdata
				});
			});
			app.get("/api/shoplist",function(req,res){
				res.json({
					dataInfo:shoplist
				});
			});
			app.get("/api/clothdetail",function(req,res){
				res.json({
					dataInfo:clothdetail
				});
			});
      app.get("/api/store_choiceness",function(req,res){
        res.json({
          dataInfo:store_choiceness
        });
      });
			app.get("/api/info_list_show",function(req,res){
        res.json({
          dataInfo:info_list_show
        });
      });

        app.get("/api/info_list_show_for",function(req,res){
        res.json({
          dataInfo:info_list_show_for
          });
      });
      app.get("/api/order",function(req,res){
        res.json({
          dataInfo:order
          });
      });
      app.get("/api/shopcart",function(req,res){
        res.json({
          dataInfo:shopcart

        });
      });
      app.get("/api/live",function(req,res){
        res.json({
          dataInfo:live
        });
      });
    },
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
