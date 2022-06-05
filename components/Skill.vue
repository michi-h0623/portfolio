<template>
  <v-container class="pt-0">
    <v-row>
      <skill-detail :skills="programmings" skillGenre="Programming Languages" />
      <skill-detail :skills="frameworks" skillGenre="Frameworks" />
    </v-row>
    <v-row>
      <skill-detail
        :skills="amazonWebServices1"
        skillGenre="Amazon Web Services - 1"
      />
      <skill-detail
        :skills="amazonWebServices2"
        skillGenre="Amazon Web Services - 2"
      />
    </v-row>
    <v-row>
      <skill-detail
        :skills="amazonWebServices3"
        skillGenre="Amazon Web Services - 3"
      />
      <skill-detail
        :skills="amazonWebServices4"
        skillGenre="Amazon Web Services - 4"
      />
    </v-row>
  </v-container>
</template>

<script>
import SkillDetail from "../components/SkillDetail";

export default {
  components: {
    SkillDetail
  },
  data() {
    return {
      programmings: [
        {
          name: "HTML5",
          exp: 80,
          icon: "mdi-language-html5",
          color: "#F26525"
        },
        {
          name: "CSS3",
          exp: 75,
          icon: "mdi-language-css3",
          color: "#29A9DF"
        },
        {
          name: "SaSS (SCSS)",
          exp: 80,
          icon: "mdi-language-css3",
          color: "#29A9DF"
        },
        {
          name: "JavaScript (〜ES2018)",
          exp: 85,
          icon: "mdi-language-javascript",
          color: "#FDD83C"
        },
        {
          name: "jQuery",
          exp: 82,
          icon: "mdi-language-javascript",
          color: "#FDD83C"
        },
        {
          name: "Python3",
          exp: 62,
          icon: "mdi-language-python",
          color: "#0277BD"
        },
        {
          name: "PHP",
          exp: 92,
          icon: "mdi-language-php",
          color: "#777BB3"
        }
      ],
      frameworks: [
        {
          name: "React.js",
          exp: 84,
          img: "/react.png",
          color: "#7BC6FF"
        },
        {
          name: "Next.js",
          exp: 75,
          img: "/nextjs.png",
          color: "#7BC6FF"
        },
        {
          name: "React Native",
          exp: 84,
          img: "/react.png",
          color: "#7BC6FF"
        },
        {
          name: "Laravel",
          exp: 77,
          icon: "mdi-laravel",
          color: "#FC4F3D"
        },
        {
          name: "Lumen",
          exp: 87,
          icon: "mdi-laravel",
          color: "#FC4F3D"
        },
        {
          name: "Django",
          exp: 27,
          img: "/django.png",
          color: "#1d5162"
        },
        {
          name: "Vue.js",
          exp: 73,
          icon: "mdi-vuejs",
          color: "#41B883"
        },
        {
          name: "Vuetify.js",
          exp: 68,
          icon: "mdi-vuetify",
          color: "#7BC6FF"
        },
        {
          name: "Nuxt.js",
          exp: 63,
          icon: "mdi-nuxt",
          color: "#40B883"
        }
      ],
      amazonWebServices1: [
        {
          name: "EC2",
          exp: 88,
          img: "/ec2.png",
          color: "#F68637"
        },
        {
          name: "Lightsail",
          exp: 92,
          img: "/lightsail.png",
          color: "#F68637"
        },
        {
          name: "Lambda",
          exp: 75,
          img: "/lambda.png",
          color: "#F68637"
        },
        {
          name: "Elastic Beanstalk",
          exp: 54,
          img: "/elasticbeanstalk.png",
          color: "#F68637"
        },
        {
          name: "Elastic Container Registry",
          exp: 74,
          img: "/ecr.png",
          color: "#F68637"
        },
        {
          name: "Elastic Container Service",
          exp: 62,
          img: "/ecs.png",
          color: "#F68637"
        },
        {
          name: "Elastic Kubernetes Service",
          exp: 68,
          img: "/eks.png",
          color: "#F68637"
        },
        {
          name: "S3",
          exp: 72,
          img: "/s3.png",
          color: "#3e8523"
        },
        {
          name: "EFS",
          exp: 36,
          img: "/efs.png",
          color: "#3e8523"
        },
        {
          name: "FSx",
          exp: 26,
          img: "/fsx.png",
          color: "#3e8523"
        },
        {
          name: "S3 Glacier",
          exp: 52,
          img: "/glacier.png",
          color: "#3e8523"
        },
        {
          name: "AWS Backup",
          exp: 82,
          img: "/backup.png",
          color: "#3e8523"
        }
      ],
      amazonWebServices2: [
        {
          name: "RDS",
          exp: 83,
          img: "/rds.png",
          color: "#4359dc"
        },
        {
          name: "ElastiCache",
          exp: 63,
          img: "/elasticache.png",
          color: "#4359dc"
        },
        {
          name: "DynamoDB",
          exp: 72,
          img: "/dynamodb.png",
          color: "#4359dc"
        },
        {
          name: "VPC",
          exp: 82,
          img: "/vpc.png",
          color: "#7e4cdb"
        },
        {
          name: "CloudFront",
          exp: 68,
          img: "/cloudfront.png",
          color: "#7e4cdb"
        },
        {
          name: "Route 53",
          exp: 82,
          img: "/route53.png",
          color: "#7e4cdb"
        },
        {
          name: "API Gateway",
          exp: 73,
          img: "/apigateway.png",
          color: "#7e4cdb"
        },
        {
          name: "CodeCommit",
          exp: 67,
          img: "/codecommit.png",
          color: "#4259db"
        },
        {
          name: "CodeBuild",
          exp: 64,
          img: "/codebuild.png",
          color: "#4259db"
        },
        {
          name: "CodeDeploy",
          exp: 69,
          img: "/codedeploy.png",
          color: "#4259db"
        },
        {
          name: "CodePipeline",
          exp: 73,
          img: "/codepipeline.png",
          color: "#4259db"
        },
        {
          name: "Cloud9",
          exp: 67,
          img: "/cloud9.png",
          color: "#4259db"
        },
        {
          name: "Support",
          exp: 92,
          img: "/support.png",
          color: "#4259db"
        }
      ],
      amazonWebServices3: [
        {
          name: "AWS Organizations",
          exp: 82,
          img: "/organizations.png",
          color: "#df3372"
        },
        {
          name: "CloudWatch",
          exp: 86,
          img: "/cloudwatch.png",
          color: "#df3372"
        },
        {
          name: "AWS Auto Scaling",
          exp: 72,
          img: "/autoscaling.png",
          color: "#df3372"
        },
        {
          name: "CloudFormation",
          exp: 31,
          img: "/cloudformation.png",
          color: "#df3372"
        },

        {
          name: "Config",
          exp: 67,
          img: "/config.png",
          color: "#df3372"
        },
        {
          name: "Service Catalog",
          exp: 36,
          img: "/servicecatalog.png",
          color: "#df3372"
        },
        {
          name: "Systems Manager",
          exp: 58,
          img: "/systemsmanager.png",
          color: "#df3372"
        },
        {
          name: "Trusted Advisor",
          exp: 76,
          img: "/trustedadvisor.png",
          color: "#df3372"
        },
        {
          name: "CloudTrail",
          exp: 86,
          img: "/cloudtrail.png",
          color: "#df3372"
        }
      ],
      amazonWebServices4: [
        {
          name: "IAM",
          exp: 78,
          img: "/iam.png",
          color: "#e33339"
        },
        {
          name: "Certificate Manager",
          exp: 72,
          img: "/certificatemanager.png",
          color: "#e33339"
        },
        {
          name: "Key Management Service",
          exp: 76,
          img: "/certificatemanager.png",
          color: "#e33339"
        },
        {
          name: "Simple Notification Service",
          exp: 62,
          img: "/simplenotificationservice.png",
          color: "#e03473"
        },
        {
          name: "Simple Queue Service",
          exp: 56,
          img: "/simplequeueservice.png",
          color: "#e03473"
        },
        {
          name: "Simple Email Service",
          exp: 72,
          img: "/simpleemailservice.png",
          color: "#445cdf"
        },
        {
          name: "Amazon Connect",
          exp: 92,
          img: "/amazonconnet.png",
          color: "#e5353a"
        },
        {
          name: "WorkMail",
          exp: 43,
          img: "/workmail.png",
          color: "#e5353a"
        },
        {
          name: "WorkSpaces",
          exp: 62,
          img: "/workspaces.png",
          color: "#369a84"
        },
        {
          name: "WorkDocs",
          exp: 42,
          img: "/workdocs.png",
          color: "#369a84"
        }
      ]
    };
  }
};
</script>
